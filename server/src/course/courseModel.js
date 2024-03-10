import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Course = sequelize.define("Course", {
    id : {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    courseCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: DataTypes.TEXT
},{
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
});

export default Course;