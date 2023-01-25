const ApiError = require('../error/ApiError')
const {Organization} = require('../models/models')

class OrganizationController {
    async create(req, res) {
        try {
            let {name, cityProblemId, categoryOfOrganizationId} = req.body

            console.log(req.body)

            if (!name) {
                return next(ApiError.badRequest('Enter please name of organization'))
            }

            const candidate = await Organization.findOne({where: {name}})

            if (candidate) {
                return next(ApiError.badRequest('Organization with this name is already exist'))
            }

            let org;

            if (!categoryOfOrganizationId && !cityProblemId) {
                org = await Organization.create({name})
            }

            if (categoryOfOrganizationId && !cityProblemId) {
                org = await Organization.create({name, categoryOfOrganizationId})
            }

            if (!categoryOfOrganizationId && cityProblemId) {
                org = await Organization.create({name, cityProblemId})
            }
            
            if (categoryOfOrganizationId && cityProblemId) {
                org = await Organization.create({name, categoryOfOrganizationId, cityProblemId})
            }

            return res.json(org)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            let {id} = req.params
            let {name, cityProblemId, categoryOfOrganizationId} = req.body

            const org = await Organization.update({name, cityProblemId, categoryOfOrganizationId}, {where: {id}})

            return res.json(org)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {categoryOfOrganizationId, cityProblemId, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let orgs
        if (!categoryOfOrganizationId && !cityProblemId) {
            orgs = await Organization.findAndCountAll({limit, offset})
        }
        if (!categoryOfOrganizationId && cityProblemId) {
            orgs = await Organization.findAndCountAll({where: {cityProblemId}, limit, offset})
        }
        if (categoryOfOrganizationId && !cityProblemId) {
            orgs = await Organization.findAndCountAll({where: {categoryOfOrganizationId}, limit, offset})
        }
        if (categoryOfOrganizationId && cityProblemId) {
            orgs = await Organization.findAndCountAll({where: {categoryOfOrganizationId, cityProblemId}, limit, offset})
        }
        return res.json(orgs)
    }

    async getOne(req, res, next) {
        const {id} = req.params
        
        if (!id) {
            return next(ApiError.badRequest('Invalid id'))
        }

        const organization = await Organization.findOne({
            where: {id}
        })

        return res.json(organization)
    }
}

module.exports = new OrganizationController()