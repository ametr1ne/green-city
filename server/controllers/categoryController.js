const ApiError = require('../error/ApiError')
const {CategoryOfOrganization} = require('../models/models')

class CategoryController {
    async create(req, res, next) {
        try {
            let {name, cityProblemId, categoryOfOrganization} = req.body

            if (!name) {
                return next(ApiError.badRequest('Enter please category name'))
            }

            const candidate = await CategoryOfOrganization.findOne({where: {name}})

            if (candidate) {
                return next(ApiError.badRequest('This category is already exist'))
            }

            const newCategory = await CategoryOfOrganization.create({name, cityProblemId, categoryOfOrganization})

            return res.json(newCategory)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const categories = await CategoryOfOrganization.findAll()
        return res.json(categories)
    }

    async getOne(req, res, next) {
        const {id} = req.params

        if (!id) {
            return next(ApiError.badRequest('Invalid id'))
        }

        const category = await CategoryOfOrganization.findOne({
            where: {id}
        })

        return res.json(category)
    }
}

module.exports = new CategoryController()