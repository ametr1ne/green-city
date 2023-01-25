const Router = require('express')
const adminController = require('../controllers/adminController')
const router = new Router()
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/registration', adminController.registration)
router.post('/login', adminController.login)
router.get('/auth', authMiddleware, adminController.check)

module.exports = router