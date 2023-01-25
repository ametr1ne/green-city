const ApiError = require('../error/ApiError')
const {ProblemSolutionStage} = require('../models/models')

class StageController {
    async create(req, res, next) {
        try {
            let {stage} = req.body

            if (!stage) {
                return next(ApiError.badRequest('Enter please stage name'))
            }

            const candidate = await ProblemSolutionStage.findOne({where: {stage}})

            if (candidate) {
                return next(ApiError.badRequest('This stage is already exist'))
            }

            const problemStage = await ProblemSolutionStage.create({stage})

            return res.json(problemStage)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const stages = await ProblemSolutionStage.findAll()
        return res.json(stages)
    }

    async getOne(req, res) {
        const {id} = req.params
        const stage = await ProblemSolutionStage.findOne({
            where: {id}
        })

        return res.json(stage)
    }
}

module.exports = new StageController()