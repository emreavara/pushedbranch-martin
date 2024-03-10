import { createError } from "../middleware/error.js"
import Student from "./studentModel.js";
import { generateAccessToken, hashPassword } from "../utils/auth.js";
import bcrypt from "bcryptjs";


const createStudent = async (studentBody) => {
    try {
        const hashedPassword = await hashPassword(studentBody.password, 10)
        studentBody.password = hashedPassword
        console.log(hashedPassword)
    } catch (error) {
        throw error
    }
    const student = await Student.create(studentBody)
    return student;

}

const loginStudent = async ( password, email) => {
    const student = await findByCredentials(password, email,true)
    const token = generateAuthToken(student)
    return token
}

const generateAuthToken = (student) => {
    const token = generateAccessToken(student.id);
    return token;
}

const findByCredentials = async (username, password, isEmail) => {

    const student = await Student.findOne({

        where: {
            [isEmail ? "email" : "username"]: username
        }
    })

    console.log(student)
    if (!student) {
        throw createError(400, "Invalid login credentials")
    }

    const isPasswordMatch = await bcrypt.compare(password, student.password)

    console.log(isPasswordMatch)
    if (!isPasswordMatch) {
        throw createError(400, "Invalid login credentials")
    }
    return student;
}

const getStudentById = async(id)=>{
    return await Student.findByPk(id)
}


const getAllStudent = async () => {
    return await Student.findAll();
}

export default { createStudent, loginStudent, getStudentById, getAllStudent }
