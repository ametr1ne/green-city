const ApiError = require('../error/ApiError')
const {Event} = require('../models/models')

class EventController {
    async create(req, res, next) {
        try {
            let {title, description, date} = req.body

            if (!title || !description) {
                return next(ApiError.badRequest('Enter please title and description'))
            }

            const candidate = await Event.findOne({where: {title}})

            if (candidate) {
                return next(ApiError.badRequest('Volunteer with this email is exist already'))
            }

            const event = await Event.create({title, description, date})

            return res.json(event)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit

        const events = await Event.findAndCountAll({limit, offset})
        
        return res.json(events)
    }

    async getOne(req, res) {
        const {id} = req.params
        const event = await Event.findOne({
            where: {id}
        })

        return res.json(event)
    }
}

module.exports = new EventController()