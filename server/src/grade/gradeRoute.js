import express from "express";
import gradeService from "./gradeService.js";

const router = express.Router();

router.post('/add', async (req,res,next)=>{
    try {
        const gradeBody= req.body;
        const grade= await gradeService.createGrade(gradeBody);
        res.status(201).json(grade);
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const grade = await gradeService.getGradeById(req.params.id);
        if (grade) {
          res.status(200).json(grade);
        } else {
          res.status(404).json({ message: "Grade not found" });
        }
        
    } catch (error) {
        next(error)
    }
})

router.get('/all', async (req, res, next) =>{
    try {
        let gradeArray = await gradeService.getAllGrade();
        res.json(gradeArray);
    } catch (error) {
        
    }
})


export default router;