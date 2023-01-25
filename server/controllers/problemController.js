const ApiError = require('../error/ApiError')
const {CityProblem} = require('../models/models')

class ProblemController {
    async create(req, res, next) {
        try {
            let {title, description, organizationId, problemSolutionStageId} = req.body

            problemSolutionStageId = problemSolutionStageId || 1

            if (!title || !description) {
                return next(ApiError.badRequest('Fill please all of fields'))
            }

            const candidate = await CityProblem.findOne({where: {title}})

            if (candidate) {
                return next(ApiError.badRequest('Problem is already registered'))
            }

            const problem = await CityProblem.create({title, description, organizationId, problemSolutionStageId})

            return res.json(problem)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            let {id} = req.params
            let {title, description, organizationId, problemSolutionStageId} = req.body

            const problem = await CityProblem.update({title, description, organizationId, problemSolutionStageId}, {where: {id}})

            return res.json(problem)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {problemSolutionStageId, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let problems
        if (!problemSolutionStageId) {
            problems = await CityProblem.findAndCountAll({limit, offset})
        }
        if (problemSolutionStageId) {
            problems = await CityProblem.findAndCountAll({where: {problemSolutionStageId}, limit, offset})
        }
        return res.json(problems)
    }

    async getOne(req, res) {
        const {id} = req.params
        const problem = await CityProblem.findOne({
            where: {id}
        })

        return res.json(problem)
    }
}

module.exports = new ProblemController()