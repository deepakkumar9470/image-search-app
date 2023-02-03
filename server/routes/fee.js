const express  = require('express')

const router = express.Router()

const {addFees,getFees,getFeeById}  = require('../controllers/feeController')


// @ /api/fee/add

router.post('/add', addFees)

// @ /api/fee
router.get('/', getFees)


// @ /api/fee/123
router.get('/:id', getFeeById)



module.exports = router