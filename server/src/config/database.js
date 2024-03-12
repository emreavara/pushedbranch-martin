import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

const sequelize = new Sequelize("employee", "employee", "admin", {
  host: "localhost",
  port: 23308,
  dialect: "mysql",
  dialectModule: mysql2,
  logging: false,
  define: {
    underscored: true,
    freezeTableName: true,
  },
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false, alter: true });
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
};

connectToDatabase();

export default sequelize;

// import * as dotenv from "dotenv";
// import { Sequelize } from "sequelize";
// dotenv.config();

// const options = {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: "mysql",
//     logging: false,
//   };

//   // if(options.dialect ==="mysql"){
//   //   options.dialect = mysql2;
//   // }

//   const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USERNAME,
//     process.env.DB_PASSWORD,
//     options
//   );

// const connectToDatabase = async () => {
//     try {
//         await sequelize.authenticate();
//         await sequelize.sync();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// connectToDatabase();

// export default sequelize;
