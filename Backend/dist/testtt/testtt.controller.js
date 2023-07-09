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
exports.TestttController = void 0;
const common_1 = require("@nestjs/common");
const testtt_service_1 = require("./testtt.service");
const create_testtt_dto_1 = require("./dto/create-testtt.dto");
const update_testtt_dto_1 = require("./dto/update-testtt.dto");
let TestttController = class TestttController {
    constructor(testttService) {
        this.testttService = testttService;
    }
    create(createTestttDto) {
        return this.testttService.create(createTestttDto);
    }
    findAll() {
        return this.testttService.findAll();
    }
    findOne(id) {
        return this.testttService.findOne(+id);
    }
    update(id, updateTestttDto) {
        return this.testttService.update(+id, updateTestttDto);
    }
    remove(id) {
        return this.testttService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_testtt_dto_1.CreateTestttDto]),
    __metadata("design:returntype", void 0)
], TestttController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestttController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestttController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_testtt_dto_1.UpdateTestttDto]),
    __metadata("design:returntype", void 0)
], TestttController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestttController.prototype, "remove", null);
TestttController = __decorate([
    (0, common_1.Controller)('testtt'),
    __metadata("design:paramtypes", [testtt_service_1.TestttService])
], TestttController);
exports.TestttController = TestttController;
//# sourceMappingURL=testtt.controller.js.map