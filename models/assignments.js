const mongoose = require('mongoose');
const assignmentsSchema = mongoose.Schema({
    studentId: {
        type: String,
        required: true
    },
    courseId: { type: String, required: true },
    semester_time: { type: String },
    date: { type: String, required: true },
    taskType: { type: String, required: true },
    solutionLink: { type: String, required: true },
});

module.exports = mongoose.model('assignments', assignmentsSchema);