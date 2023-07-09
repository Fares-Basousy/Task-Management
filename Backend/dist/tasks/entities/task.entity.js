"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = exports.Taskschema = void 0;
const mongoose_1 = require("mongoose");
exports.Taskschema = new mongoose_1.Schema({
    title: {
        type: String,
        unique: true,
    },
    userid: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    id: {
        type: mongoose_1.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
        unique: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    timespent: {
        type: Number
    },
    timespentUSR: {
        type: String
    },
    LastActiveDate: {
        type: Date,
        default: Date.now
    }
});
exports.TaskModel = (0, mongoose_1.model)("Task", exports.Taskschema);
//# sourceMappingURL=task.entity.js.map