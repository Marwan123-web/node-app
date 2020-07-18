const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    author_id: { type: String, required: true },
    author_name: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: String, required: true }
});

module.exports = mongoose.model('post', postSchema);