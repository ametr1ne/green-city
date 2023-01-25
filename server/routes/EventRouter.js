const Router = require('express')
const router = new Router()
const eventController = require('../controllers/eventController')
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/', authMiddleware, eventController.create)
router.get('/', eventController.getAll)
router.get('/:id', eventController.getOne)

module.exports = router