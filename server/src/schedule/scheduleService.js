import { createError } from "../middleware/error.js";
import Schedule from "./scheduleModel.js";

const createSchedule = async (scheduleBody) => {
    try {
        const schedule = await Schedule.create(scheduleBody)
        return schedule;
    } catch (error) {
        throw error
    }
}

const getScheduleById = async (id) => {
    return await Schedule.findByPk(id)
}

const getAllSchedule = async () => {
    return await Schedule.findAll();
}

export default { createSchedule, getScheduleById, getAllSchedule };