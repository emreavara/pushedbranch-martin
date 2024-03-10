import express from 'express';

import validator from 'validator';
import courseService from './courseService.js';
const router = express.Router();

router.post('/new', async (req, res, next) => {
    try {
        console.log(req.body)
        const courseBody = req.body;
        const course = await courseService.createCourse(courseBody);
        res.status(201).json(course);
    } catch (error) {
        next(error);
    }
})


router.get('/:id', async (req, res, next) => {
    try {
        const course = await courseService.getCourseById(req.params.id);
        if (course) {
          res.status(200).json(course);
        } else {
          res.status(404).json({ message: "Course not found" });
        }
        
    } catch (error) {
        next(error)
    }
})


router.get('/all', async (req, res, next) =>{
    try {
        let courseArray = await courseService.getAllCourse();
        res.json(courseArray);
    } catch (error) {
        
    }
})
export default router;