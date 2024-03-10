import express from 'express';
import adminService from './adminService.js';
import { createAdminValidator, loginAdminValidator, validate } from '../middleware/validation/admin-validation.js';
import validator from 'validator';
import generatePassword from '../utils/passwordCreator.js';
const router = express.Router();

router.post('/signup', async (req, res, next) => {
    try {
        console.log(req.body)
        const adminBody = req.body;
        const admin = await adminService.createAdmin(adminBody);
        res.status(201).json(admin);
    } catch (error) {
        next(error);
    }
})

router.post('/login', loginAdminValidator, validate, async (req, res, next) => {
    try {
        const { name, password } = req.body;
        const isEmail = validator.isEmail(name);
        const token = await adminService.loginAdmin(password, isEmail);
        res.status(200).json(token)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const admin = await adminService.getAdminById(req.params.id);
        if (admin) {
          res.status(200).json(admin);
        } else {
          res.status(404).json({ message: "Admin not found" });
        }
        
    } catch (error) {
        next(error)
    }
})

router.get('/all', async (req, res, next) =>{
    try {
        let adminArray = await adminService.getAllAdmin();
        res.json(adminArray);
    } catch (error) {
        
    }
})

export default router;