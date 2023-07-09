"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_entity_1 = require("./entities/task.entity");
let TasksService = class TasksService {
    constructor(TaskModel) {
        this.TaskModel = TaskModel;
    }
    async add(Title, Userid) {
        const title = Title.toLowerCase();
        const userid = Userid;
        const newtask = new this.TaskModel({
            title,
            userid,
        });
        return newtask;
    }
    async findAll(Userid) {
        const tasks = await this.TaskModel.find({ userid: Userid });
        return tasks;
    }
    async findOne(Userid, Title) {
        const task = await this.TaskModel.find({ userid: Userid, title: Title });
        return task;
    }
    async update(Userid, Title, changedData, newValue) {
        const task = await this.TaskModel.findOneAndUpdate({ userid: Userid, title: Title }, { changedData: newValue }, { new: true });
        return task;
    }
    async remove(Userid, Title) {
        const task = await this.TaskModel.findOneAndDelete({ userid: Userid, title: Title });
        return `Document Deleted Sucessfully`;
    }
    async ChangeStatus(userid, Title) {
        const updatedTask = await task_entity_1.TaskModel.findByIdAndUpdate(Title, {
            $set: {
                fun: {
                    $function: {
                        body: function (LastActiveDate, status, timespent, timespentUSR) {
                            if (status == true) {
                                let date = new Date();
                                let diff = date.getTime() - LastActiveDate.getTime();
                                diff /= 1000;
                                timespent += diff;
                                let hours = Math.floor(diff / 3600);
                                let minutes = Math.floor((diff % 3600) / 60);
                                diff = diff % 60;
                                let HH = hours < 10 ? "0" + hours : hours;
                                let MM = minutes < 10 ? "0" + minutes : minutes;
                                let SS = diff < 10 ? "0" + diff : diff;
                                timespentUSR = HH + ":" + MM + ":" + SS;
                                return {
                                    LastActiveDate: date,
                                    status: !status,
                                    timespentUSR: timespentUSR,
                                };
                            }
                            else {
                                return { status: false };
                            }
                        },
                        args: [
                            '$fun.LastActiveDate',
                            '$fun.status',
                            '$fun.timespent',
                            '$fun.timespentUSR',
                        ],
                        lang: 'js',
                    },
                },
            },
        }, { new: true });
        return updatedTask;
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('task')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map