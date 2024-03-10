import express from 'express';
import validator from 'validator';
import classService from './classService.js';
const router = express.Router();

router.post('/new', async (req, res, next) => {
    try {
        console.log(req.body)
        const classBody = req.body;
        const newClass = await classService.createClass(classBody);
        res.status(201).json(newClass);
    } catch (error) {
        next(error);
    }
})


router.get('/:id', async (req, res, next) => {
    try {
        const getClass = await classService.getClassById(req.params.id);
        if (getClass) {
          res.status(200).json(getClass);
        } else {
          res.status(404).json({ message: "Class not found" });
        }
        
    } catch (error) {
        next(error)
    }
})


router.get('/all', async (req, res, next) =>{
    try {
        let classArray = await classService.getAllClass();
        res.json(classArray);
    } catch (error) {
        
    }
})
export default router;