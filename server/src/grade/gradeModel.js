import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Grade = sequelize.define("Grade", {
  grade:{
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  }
},{
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
});

export default Grade;