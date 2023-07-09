"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTestttDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_testtt_dto_1 = require("./create-testtt.dto");
class UpdateTestttDto extends (0, mapped_types_1.PartialType)(create_testtt_dto_1.CreateTestttDto) {
}
exports.UpdateTestttDto = UpdateTestttDto;
//# sourceMappingURL=update-testtt.dto.js.map