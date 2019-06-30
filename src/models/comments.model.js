const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentsSchema = new Schema({
    id: {type: String, required: false, max: 100},
    username: {type: String, required: true},
    text: {type: String, require: true, max: 100},
    image: {type: String, require: true}
});

// Export the model
module.exports = mongoose.model('Comments', commentsSchema);