const Router = require('express')
const router = new Router()
const eventRouter = require('./EventRouter')
const organizationRouter = require('./OrganizationRouter')
const problemRouter = require('./ProblemRouter')
const volunteerRouter = require('./VolunteerRouter')
const stageRouter = require('./StageRouter')
const categoryRouter = require('./CategoryRouter')
const adminRouter = require('./AdminRouter')

router.use('/admin', adminRouter)
router.use('/volunteer', volunteerRouter)
router.use('/event', eventRouter)
router.use('/organization', organizationRouter)
router.use('/problem', problemRouter)
router.use('/stage', stageRouter)
router.use('/category', categoryRouter)

module.exports = router