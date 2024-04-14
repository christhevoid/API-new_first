const mongoose = require(`mongoose`);

const novelSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model(`Novel`, novelSchema)