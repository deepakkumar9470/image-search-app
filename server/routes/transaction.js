const express  = require('express')

const router = express.Router()

const {addTransaction,getTransaction,getTransactionById}  = require('../controllers/transactionController')


// @ /api/transactions/add

router.post('/add', addTransaction)

// @ /api/transactions
router.get('/', getTransaction)


// @ /api/transactions
router.get('/:id', getTransactionById)



module.exports = router