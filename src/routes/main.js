let express = require('express')
let router = express.Router()
let controller = require('../controllers/mainController')
let adminLog = require('../middlewares/adminUsers')

router.get('/',controller.index)
router.get('/admin',adminLog, controller.admin)

module.exports = router