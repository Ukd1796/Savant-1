const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EditorSchema = new Schema({
        data: {
            type: Object,
            required:true
        }
    }
)

module.exports = mongoose.model('Editor', EditorSchema);