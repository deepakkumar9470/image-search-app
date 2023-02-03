const mongoose = require('mongoose')

const FeeSchema = new mongoose.Schema({
    amount  : {
        type: Number,
        default :0
    },
    feename  : {
        type: String,
      
    },
    isPaidOn  : {
        type:  Boolean,
        default :false
    },
   
    
},{timestamps : true})

module.exports = mongoose.model('fee', FeeSchema)