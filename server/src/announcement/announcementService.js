import { createError } from "../middleware/error.js";
import Announcement from "./announcementModel.js";

const createAnnounce = async (announceBody) => {
    try {
        const announce = await Announcement.create(announceBody)
        return announce;
    } catch (error) {
        throw error
    }
}

const getAnnounceById = async(id)=>{
    return await Announcement.findByPk(id)
}


const getAllAnnounce = async () => {
    return await Announcement.findAll();
}
export default { createAnnounce, getAnnounceById,getAllAnnounce };