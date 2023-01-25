const Router = require('express')
const router = new Router()
const volunteerController = require('../controllers/volunteerController')
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/', authMiddleware, volunteerController.create)
router.get('/', volunteerController.getAll)
router.get('/:id', volunteerController.getOne)

module.exports = router