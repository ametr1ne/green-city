const Router = require('express')
const organizationController = require('../controllers/organizationController')
const router = new Router()
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/', authMiddleware, organizationController.create)
router.get('/', organizationController.getAll)
router.get('/:id', organizationController.getOne)
router.patch('/:id', authMiddleware, organizationController.getOne)

module.exports = router