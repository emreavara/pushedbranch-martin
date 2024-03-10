import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Announcement = sequelize.define("Announcement", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    dueDate:{
        type: DataTypes.TIME,
        allowNull: true
    }
},{
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
})

export default Announcement;