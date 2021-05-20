const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        minLength: [3, "Name must be at least 3 characters long"]
    }

}, {timestamps:true})

module.exports.author = mongoose.model('author', AuthorSchema);