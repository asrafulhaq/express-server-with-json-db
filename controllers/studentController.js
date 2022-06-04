const { count } = require('console');
const fs = require('fs');
const path = require('path');
const Student = require('../models/students');


// Students data model 
const students = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/students.json')).toString());


// get latest id 
const getLatestId = () => {

    if( students.length > 0 ){
        return students[students.length - 1].id + 1 ;
    }else{
        return 1;
    }
    

}

// Get all students
const getAllStudents = async (req, res) => {

    const student_all = await Student.find(); 

    res.status(200).json(student_all);
 
}

// Get all students
const getSingleStudent = async (req, res) => {
    
    let id = req.params.id;

    let student = await Student.findById(id);

    if( !student ){
        res.status(400).json({
            message : "Student not found" 
        });
    }

    res.status(200).json(student);  

    
}

// Get all students
const createStudent = async (req, res) => {
 

    if( req.body.name != '' ||  req.body.age != '' || req.body.skill != '' ){
        students.push({
            id : getLatestId(),
            name  : req.body.name, 
            age : req.body.age, 
            skill : req.body.skill
        });
    
        const student_create = await Student.create({
            name : req.body.name,
            age : req.body.age,
            skill : req.body.skill
        });
    
        res.status(201).json({
            message : 'Student data created successfull'
        });

    }else{
        res.status(400).json({
            message : 'You have to put form data'
        });
    }

   
}


// Get all students
const updateStudent = (req, res) => {
    res.send('Ami akhon controller thaka Student banabo');
}




// Get all students
const deleteStudent = async (req, res) => {
    
    let id = req.params.id;
    let delete_data = await Student.findById(id);

    if( !delete_data ){
        res.status(400).json({
            message : "Delete Student not found" 
        });
    }
    let delete_student = await Student.findByIdAndDelete(id); 

    res.status(200).json({
        message : "Delete Student successful"
    });

}


module.exports = {
    getAllStudents, 
    getSingleStudent,
    createStudent, 
    updateStudent, 
    deleteStudent
}