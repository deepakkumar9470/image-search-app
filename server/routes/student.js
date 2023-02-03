const express  = require('express')

const router = express.Router()

const {addStudent,getStudents,getStudentById}  = require('../controllers/studentController')


// @ /api/student/create

router.post('/create', addStudent)

// @ /api/student
router.get('/', getStudents)


// @ /api/student/123
router.get('/:id', getStudentById)



module.exports = router