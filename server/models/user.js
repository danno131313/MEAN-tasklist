const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, minlength: 2 },
    listItems: [{type: Schema.Types.ObjectId, ref: 'ListItem'}]
}, {timestamps: true});

mongoose.model("User", UserSchema);
