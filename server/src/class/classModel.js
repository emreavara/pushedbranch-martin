import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Class = sequelize.define("Class",{
    name: {
        type:DataTypes.STRING,
        allowNull: false 
    }
},{
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
})

export default Class;