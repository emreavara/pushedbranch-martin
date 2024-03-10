import express from 'express';
import validator from 'validator';
import materialService from './materialService.js';
const router = express.Router();

router.post('/new', async (req, res, next) => {
    try {
        console.log(req.body)
        const materialBody = req.body;
        const material = await materialService.createMaterial(materialBody);
        res.status(201).json(material);
    } catch (error) {
        next(error);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const material = await materialService.getMaterialById(req.params.id);
        if (material) {
          res.status(200).json(material);
        } else {
          res.status(404).json({ message: "Material not found" });
        }
        
    } catch (error) {
        next(error)
    }
})


router.get('/all', async (req, res, next) =>{
    try {
        let materialArray = await materialService.getAllMaterial();
        res.json(materialArray);
    } catch (error) {
        
    }
})
export default router;