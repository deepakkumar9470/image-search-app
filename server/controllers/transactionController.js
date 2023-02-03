const Transaction = require('../models/Transaction');


module.exports.addTransaction = async (req, res) => {
    // retreive the info of user from frontend
    const transaction = req.body;

    try{
        const newTransaction = new Transaction(transaction);
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error){
        res.status(404).json({ message: error.message});     
    }
}

module.exports.getTransaction = async (req, res) => {
    try{
       
        const transaction = await Transaction.find();
        res.status(200).json(transaction);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}


module.exports.getTransactionById = async (req, res) => {
    try{
        const trans = await Transaction.findById(req.params.id);
        res.status(200).json(trans);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}

