
const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    amount  : {
        type: Number,
        default :0
    },
    paymentmode  : {
        type: String,
     
    },
    isPaidOn  : {
        type:  Boolean,
        default :false
    },
   
    
},{timestamps : true})

module.exports = mongoose.model('transaction', TransactionSchema)