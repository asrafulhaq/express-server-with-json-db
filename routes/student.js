const express = require('express');
const router = express.Router();

 const { getAllStudents, getSingleStudent, createStudent, updateStudent, deleteStudent } = require('../controllers/studentController');

 router.route('/').get(getAllStudents).post(createStudent);
 router.route('/:id').get(getSingleStudent).put(updateStudent).patch(updateStudent).delete(deleteStudent);
 

// export router
module.exports = router;