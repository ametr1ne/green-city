const Router = require('express')
const router = new Router()
const stageController = require('../controllers/stageController')
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/', authMiddleware, stageController.create)
router.get('/', stageController.getAll)
router.get('/:id', stageController.getOne)

module.exports = router