import express from "express";
import teacherService from "./teacherService.js";
import multer from 'multer';
import { createTeacherValidator, loginTeacherValidator, validate } from '../middleware/validation/teacher-validation.js';

const router = express.Router();

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' }); // Destination folder for uploaded files

router.post('/register', upload.single('avatar'), async (req,res,next)=>{
    try {
        const teacherBody= req.body;
        // Assuming the avatar field is sent in the request body
        const avatar = req.file; // Uploaded file
        const teacher= await teacherService.createTeacher({...teacherBody, avatar: avatar.filename}); // Saving the filename in the database
        res.status(201).json(teacher);
    } catch (error) {
        next(error)
    }
})

router.post('/login', loginTeacherValidator, validate, async (req, res, next) => {
    try {
        const { name, password } = req.body;
        const isEmail = validator.isEmail(name);
        const token = await teacherService.loginTeacher(password, isEmail);
        res.status(200).json(token)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', loginTeacherValidator, async (req, res, next) => {
    try {
        const teacher = await teacherService.getTeacherById(req.params.id);
        if (teacher) {
          res.status(200).json(teacher);
        } else {
          res.status(404).json({ message: "Teacher not found" });
        }
        
    } catch (error) {
        next(error)
    }
})

router.get('/all', async (req, res, next) =>{
    try {
        let teacherArray = await teacherService.getAllTeacher();
        res.json(teacherArray);
    } catch (error) {
        
    }
})

export default router;
