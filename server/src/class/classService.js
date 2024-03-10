import { createError } from "../middleware/error.js";
import Class from "./classModel.js";

const createClass = async (classBody) => {
    try {
        const newClass = await Class.create(classBody)
        return newClass;
    } catch (error) {
        throw error
    }
}

const getClassById = async(id)=>{
    return await Class.findByPk(id)
}


const getAllClass = async () => {
    return await Class.findAll();
}
export default { createClass, getClassById,getAllClass };