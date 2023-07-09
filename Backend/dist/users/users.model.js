"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const Mongoose = require("mongoose");
exports.UserSchema = new Mongoose.Schema({
    id: {
        type: Mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    }
});
const User = Mongoose.model("User", exports.UserSchema);
//# sourceMappingURL=users.model.js.map