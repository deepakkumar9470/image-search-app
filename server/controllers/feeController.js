const Fees = require('../models/Fees');


module.exports.addFees = async (req, res) => {
    // retreive the info of user from frontend
   

    try{
        const newFee = new Fees(req.body);
        await newFee.save();
        res.status(201).json(newFee);
    } catch (error){
        res.status(404).json({ message: error.message});     
    }
}

module.exports.getFees = async (req, res) => {
    try{
       
        const fees = await Fees.find().sort({_id: -1});
        res.status(200).json(fees);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}


module.exports.getFeeById = async (req, res) => {
    try{
        const fee = await Fees.findById(req.params.id);
        res.status(200).json(fee);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}

