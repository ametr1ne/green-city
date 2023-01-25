const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/', authMiddleware, categoryController.create)
router.get('/', categoryController.getAll)
router.get('/:id', categoryController.getOne)

module.exports = router