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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
let TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    async create(title, userid) {
        const newtask = await this.tasksService.add(title, userid);
        return { msg: "Task created sucessfully",
            newtask };
    }
    findAll() {
        return this.tasksService.findAll(":id");
    }
    findOne(userid, title) {
        return this.tasksService.findOne(userid, title);
    }
    update(userid, title, changedData, nweValue) {
        return this.tasksService.update(userid, title, changedData, nweValue);
    }
    remove(userid, title) {
        return this.tasksService.remove(userid, title);
    }
    async Status(id, TaskId) {
        const updatedUser = await this.tasksService.ChangeStatus(id, TaskId);
        return {
            message: 'Status changed successfully',
            user: updatedUser,
        };
    }
};
__decorate([
    (0, common_1.Post)('/:id/addtask'),
    __param(0, (0, common_1.Body)("title")),
    __param(1, (0, common_1.Param)(':id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:id/findalltask'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id/findtask'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)("title")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/:id/updatetask'),
    __param(0, (0, common_1.Param)(':id')),
    __param(1, (0, common_1.Body)("title")),
    __param(2, (0, common_1.Body)("changedData")),
    __param(3, (0, common_1.Body)("newValue")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id/removetask'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)("title")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('/:id/changestatus'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('TaskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "Status", null);
TasksController = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map