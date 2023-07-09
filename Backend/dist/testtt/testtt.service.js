"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestttService = void 0;
const common_1 = require("@nestjs/common");
let TestttService = class TestttService {
    create(createTestttDto) {
        return 'This action adds a new testtt';
    }
    findAll() {
        return `This action returns all testtt`;
    }
    findOne(id) {
        return `This action returns a #${id} testtt`;
    }
    update(id, updateTestttDto) {
        return `This action updates a #${id} testtt`;
    }
    remove(id) {
        return `This action removes a #${id} testtt`;
    }
};
TestttService = __decorate([
    (0, common_1.Injectable)()
], TestttService);
exports.TestttService = TestttService;
//# sourceMappingURL=testtt.service.js.map