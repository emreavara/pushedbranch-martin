import './config/database.js'
import "./config/associations.js"
import express from 'express';
import logHandler from './middleware/logHandler.js';
import adminRoute from "./admin/adminRoute.js";
import teacherRoute from "./teacher/teacherRoute.js";
import studentRoute from "./student/studentRoute.js";
import classRoute from "./class/classRoute.js";
import courseRoute from "./course/courseRoute.js";
import gradeRoute from "./grade/gradeRoute.js";
import scheduleRoute from "./schedule/scheduleRoute.js";
import announcementRoute from "./announcement/announcementRoute.js";
const app = express();

app.use(express.json());
app.use(logHandler);

app.use('/api/admin',adminRoute);
app.use('/api/teacher',teacherRoute);
app.use('/api/student',studentRoute);
app.use('/api/class',classRoute);
app.use('/api/course',courseRoute);
app.use('/api/grade',gradeRoute);
app.use('/api/schedule',scheduleRoute);
app.use('/api/announce',announcementRoute);



export default app;