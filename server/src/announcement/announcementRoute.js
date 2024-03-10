import express from 'express';
import announceService from './announcementService.js';
import validator from 'validator';
const router = express.Router();

router.post('/new', async (req, res, next) => {
    try {
        console.log(req.body)
        const announceBody = req.body;
        const announce = await announceService.createAnnounce(announceBody);
        res.status(201).json(announce);
    } catch (error) {
        next(error);
    }
})


router.get('/:id', async (req, res, next) => {
    try {
        const announce = await announceService.getAnnounceById(req.params.id);
        if (announce) {
          res.status(200).json(announce);
        } else {
          res.status(404).json({ message: "Announce not found" });
        }
        
    } catch (error) {
        next(error)
    }
})


router.get('/all', async (req, res, next) =>{
    try {
        let announceArray = await announceService.getAllAnnounce();
        res.json(announceArray);
    } catch (error) {
        
    }
})
export default router;