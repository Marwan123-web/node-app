const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    courseCode: {
        type: String,
        required: 'Please Enter Course Code'
    },
    courseName: { type: String, required: 'Please Enter course Name' },
    courseDepartment: { type: String, default: 'General', enum: ['General', 'Information Systems', 'Computer Science', 'Internet Technology'], required: 'Please Enter Course Department' },
    creaditHours: { type: Number, required: 'Please Enter course hours' },
    prerequisite: { type: String, required: 'Please Enter prerequisite' },
    status: { type: String, default: 'active', enum: ["active", "disable"] },
    semesters: [{
        semester_time: { type: String },
        semester_status: { type: String, default: 'open', enum: ["open", "finished"] },
        attendance_status: { type: String, default: 'open', enum: ["open", "close"] },
        grades: [{
            type: { type: String },
            grade: { type: Number }
        }],
        materials: [{
            type: { type: String },
            path: { type: String }
        }],
        tasks: [{
            type: { type: String },
            path: { type: String },
            deadLine: { type: String },

        }],
        lectures: [{
            lectureNumber: { type: Number },
            // lectureLocation: { type: String },
            lectureTime: { type: Date, default: Date.now() },
            routerAddress: { type: String }
        }]
    }]

});
module.exports = mongoose.model('course', courseSchema);