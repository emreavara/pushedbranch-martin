import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Material = sequelize.define("Material", {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    file_URL:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
});

export default Material;