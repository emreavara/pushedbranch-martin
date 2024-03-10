import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Schedule = sequelize.define("Schedule", {
   day_of_week:{
    type: DataTypes.STRING,
    allowNull: false
   },
   start_time:{
    type: DataTypes.DATE,
    allowNull: false
   },
   end_tine: {
    type: DataTypes.DATE,
    allowNull: false
   }
},{
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
});

export default Schedule;