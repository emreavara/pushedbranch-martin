import express from 'express';
import scheduleService from './scheduleService.js';
const router = express.Router();

router.post('/new', async (req, res, next) => {
    try {
        console.log(req.body)
        const scheduleBody = req.body;
        const schedule = await scheduleService.createSchedule(scheduleBody);
        res.status(201).json(schedule);
    } catch (error) {
        next(error);
    }
})


router.get('/:id', async (req, res, next) => {
    try {
        const schedule = await scheduleService.getScheduleById(req.params.id);
        if (schedule) {
          res.status(200).json(schedule);
        } else {
          res.status(404).json({ message: "Schedule not found" });
        }
        
    } catch (error) {
        next(error)
    }
})


router.get('/all', async (req, res, next) =>{
    try {
        let scheduleArray = await scheduleService.getAllSchedule();
        res.json(scheduleArray);
    } catch (error) {
        
    }
})
export default router;