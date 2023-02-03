const Student = require('../models/Student');


module.exports.addStudent = async (req, res) => {
    // retreive the info of user from frontend
    const student = req.body;

    try{
        const newStudent = new Student(student);
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error){
        res.status(404).json({ message: error.message});     
    }
}

module.exports.getStudents = async (req, res) => {
    try{
       
        const students = await Student.find().sort({_id : -1});
        res.status(200).json(students);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}


module.exports.getStudentById = async (req, res) => {
    try{
        const student = await Student.findById(req.params.id);
        res.status(200).json(student);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}

