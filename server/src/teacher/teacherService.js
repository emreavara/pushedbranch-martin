import { createError } from "../middleware/error.js"
import Teacher from "./teacherModel.js";
import { generateAccessToken, hashPassword } from "../utils/auth.js";
import bcrypt from "bcryptjs";


const createTeacher = async (teacherBody) => {
    if (await isEmailTaken(teacherBody.email)) {
        throw ({ status: 400, message: "Email is already taken." })
    }
    try {
        const hashedPassword = await hashPassword(teacherBody.password, 10)
        teacherBody.password = hashedPassword
    } catch (error) {
        throw error
    }
    const teacher = await Teacher.create(teacherBody)
    return teacher;

}

const isEmailTaken = async (pEmail) => {
    const teacher = await Teacher.findOne({
        where: {
            email: pEmail.toLowerCase()
        }
    })
    return !!teacher;
}

const loginTeacher = async (password, email) => {
    const teacher = await findByCredentials(password, email,true)
    const token = generateAuthToken(teacher)
    return token
}

const generateAuthToken = (teacher) => {
    const token = generateAccessToken(teacher.id);
    return token;
}

const findByCredentials = async (username, password, isEmail) => {
    const teacher = await Teacher.findOne({
        where: {
            [isEmail ? "email" : "username"]: username
        }
    })
    console.log(teacher)
    if (!teacher) {
        throw createError(400, "Invalid login credentials")
    }

    const isPasswordMatch = await bcrypt.compare(password, teacher.password)
    console.log(isPasswordMatch)
    if (!isPasswordMatch) {
        throw createError(400, "Invalid login credentials")
    }

    return teacher;
}


const getTeacherById = async(id)=>{
    return await Teacher.findByPk(id)
}


const getAllTeacher = async () => {
    return await Teacher.findAll();
}

export default { createTeacher, loginTeacher, getTeacherById, getAllTeacher }