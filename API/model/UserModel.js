const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    username: { type: String, unique: true },
    is_active: { type: Boolean, default: true },
    creator_ip: { type: String },
    updator_ip: { type: String }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("user", userSchema);