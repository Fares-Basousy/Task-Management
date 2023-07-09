"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const Mongoose = require("mongoose");
exports.TaskSchema = new Mongoose.Schema({
    title: {
        type: String,
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean
    },
    timespent: { type: Number
    },
    user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});
const Task = Mongoose.model("Task", exports.TaskSchema);
//# sourceMappingURL=tasks.model.js.map