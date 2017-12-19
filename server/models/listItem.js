const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    checked: { type: Boolean, default: false },
    title: { type: String, minlength: 5, required: true },
    description: { type: String, minlength: 10, required: true },
    user: { type: Object }
    }, {timestamps: true});

mongoose.model("ListItem", ItemSchema);
