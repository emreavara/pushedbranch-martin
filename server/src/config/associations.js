import Announcement from "../announcement/announcementModel.js";
import Class from "../class/classModel.js";
import Course from "../course/courseModel.js";
import Grade from "../grade/gradeModel.js";
import Material from "../material/materialModel.js";
import Schedule from "../schedule/scheduleModel.js";
import Student from "../student/studentModel.js";
import Teacher from "../teacher/teacherModel.js";

Teacher.hasMany(Class);
Class.belongsTo(Teacher);


Student.belongsToMany(Class, 
    { through: 'Enrollment',
     foreignKey: 'student_id' 
});
Class.belongsToMany(Student,
    { through: "Enrollment",
    foreignKey: "class_id"
});



// User.hasOne(Grade, {
//     foreignKey: {
//         name: "courseId",
//         allowNull: false
//     }
// });
// Grade.belongsTo(User, {
//     foreignKey: {
//         name: "userId",
//         allowNull: false,
//         unique: true
//     }
// })


// Customers.hasMany(Orders);
// Orders.belongsTo(Customers)

// Customers.belongsToMany(Courses, { through: CustomerCourses });
// Courses.belongsToMany(Customers, { through: CustomerCourses })