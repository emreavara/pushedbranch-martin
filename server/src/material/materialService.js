import { createError } from "../middleware/error.js";
import Material from "./materialModel.js";

const createMaterial = async (materialBody) => {
    try {
        const material = await Material.create(materialBody)
        return material;
    } catch (error) {
        throw error
    }
}

const getMaterialById = async (id) => {
    return await Material.findByPk(id)
}

const getAllMaterial = async () => {
    return await Material.findAll();
}

export default { createMaterial, getMaterialById, getAllMaterial };