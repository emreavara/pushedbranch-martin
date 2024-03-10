import { createError } from "../middleware/error.js";
import Course from "./courseModel.js";

const createCourse = async (courseBody) => {
    try {
        const course = await Course.create(courseBody)
        return course;
    } catch (error) {
        throw error
    }
}

const getCourseById = async (id) => {
    return await Course.findByPk(id)
}


const getAllCourse = async () => {
    return await Course.findAll();
}
export default { createCourse, getCourseById, getAllCourse };