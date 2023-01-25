const ApiError = require('../error/ApiError')
const {Admin} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class AdminController {

    async registration(req, res, next) {
        const {email, password} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect email or password'))
        }
        const candidate = await Admin.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('This email already registered'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const admin = await Admin.create({email, password: hashPassword})
        const token = generateJwt(admin.id, admin.email)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const admin = await Admin.findOne({where: {email}})
        if (!admin) {
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, admin.password)
        if (!comparePassword) {
            return next(ApiError.internal('Password is incorrect'))
        }
        const token = generateJwt(admin.id, admin.email)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.admin.id, req.admin.email)
        return res.json({token})
    }
}


module.exports = new AdminController()