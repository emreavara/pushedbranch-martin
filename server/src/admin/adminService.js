import { createError } from "../middleware/error.js";
import Admin from "./adminModel.js";
import { generateAccessToken, hashPassword } from "../utils/auth.js";
import bcrypt from "bcryptjs";

const createAdmin = async (adminBody) => {
    try {
        const hashedPassword = await hashPassword(adminBody.password, 10)
        adminBody.password = hashedPassword
        console.log(hashedPassword)
    } catch (error) {
        throw error
    }
    const admin = await Admin.create(adminBody)
    return admin;

}

const loginAdmin = async (password, email) => {
    const admin = await findByCredentials(password, email,true)
    const token = generateAuthToken(admin)
    return token
}

const generateAuthToken = (admin) => {
    const token = generateAccessToken(admin.id);
    return token;
}

const findByCredentials = async (username, password, isEmail) => {
    const admin = await Admin.findOne({
        where: {
            [isEmail ? "email" : "username"]: username
        }
    })
    console.log(admin)
    if (!admin) {
        throw createError(400, "Invalid login credentials")
    }

    const isPasswordMatch = await bcrypt.compare(password, admin.password)
    console.log(isPasswordMatch)
    if (!isPasswordMatch) {
        throw createError(400, "Invalid login credentials")
    }
    return admin;
}

const getAdminById = async(id)=>{
    return await Admin.findByPk(id)
}


const getAllAdmin = async () => {
    return await Admin.findAll();
}

export default { createAdmin, loginAdmin, getAdminById, getAllAdmin }