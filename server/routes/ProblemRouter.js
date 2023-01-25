const Router = require('express')
const router = new Router()
const problem = require('../controllers/problemController')
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/', authMiddleware, problem.create)
router.get('/', problem.getAll)
router.get('/:id', problem.getOne)
router.patch('/:id', authMiddleware, problem.update)

module.exports = router