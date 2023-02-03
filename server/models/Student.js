const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    firstName  : {
        type: String,
         required: true
    },
    lastName  : {
        type: String,
      required: true
    },
    rollno  : {
        type:  Number,
        
    },
    mobile  : {
        type: Number,
       
    },
  
   
    
},{timestamps : true})

module.exports = mongoose.model('Student', StudentSchema)