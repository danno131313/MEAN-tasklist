const mongoose = require('mongoose');
const ListItem = require('./listItem').itemSchema;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, minlength: 2 },
    listItems: [ListItem]
}, {timestamps: true});

mongoose.model("User", UserSchema);
