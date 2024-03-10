import express from "express";
import studentService from "./studentService.js";
import { createStudentValidator, loginStudentValidator, validate } from '../middleware/validation/student-validation.js';
import validator from 'validator';

const router = express.Router();

router.post('/signup', async (req,res,next)=>{
    try {
        console.log(req.body)
        const studentBody= req.body;
        const student= await studentService.createStudent(studentBody);
        res.status(201).json(student);
    } catch (error) {
        next(error)
    }
})

router.post('/login', loginStudentValidator, validate, async (req, res, next) => {
    try {
        const { name, password } = req.body;
        const isEmail = validator.isEmail(name);
        const token = await studentService.loginStudent(password, isEmail);
        res.status(200).json(token)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const student = await studentService.getStudentById(req.params.id);
        if (student) {
          res.status(200).json(student);
        } else {
          res.status(404).json({ message: "Student not found" });
        }
        
    } catch (error) {
        next(error)
    }
})

router.get('/all', async (req, res, next) =>{
    try {
        let studentArray = await studentService.getAllStudent();
        res.json(studentArray);
    } catch (error) {
        
    }
})


export default router;