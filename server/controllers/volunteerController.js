const ApiError = require('../error/ApiError')
const {Volunteer} = require('../models/models')

class VolunteerController {
    async create(req, res, next) {
        try {
            let {fullname, email, birthDate} = req.body

            if (!fullname || !email || !birthDate) {
                return next(ApiError.badRequest('Fill please all of fields'))
            }

            const candidate = await Volunteer.findOne({where: {email}})

            if (candidate) {
                return next(ApiError.badRequest('Volunteer with this email is exist already'))
            }

            const volunteer = await Volunteer.create({fullname, email, birthDate})

            return res.json(volunteer)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {eventId, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let volunteers
        if (!eventId) {
            volunteers = await Volunteer.findAndCountAll({limit, offset})
        }
        if (eventId) {
            volunteers = await Volunteer.findAndCountAll({where: {eventId}, limit, offset})
        }
        return res.json(volunteers)
    }

    async getOne(req, res) {
        const {id} = req.params
        const volunteer = await Volunteer.findOne({
            where: {id}
        })

        return res.json(volunteer)
    }
}

module.exports = new VolunteerController()