import { createError } from "../middleware/error.js";
import Grade from "./gradeModel.js";

const createGrade = async (gradeBody) => {
    try {
        const grade = await Grade.create(gradeBody)
        return grade;
    } catch (error) {
        throw error
    }
}
const getGradeById = async (id) => {
    return await Grade.findByPk(id)
}


const getAllGrade = async () => {
    return await Grade.findAll();
}

export default { createGrade, getGradeById, getAllGrade };