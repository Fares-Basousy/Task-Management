import { TestttService } from './testtt.service';
import { CreateTestttDto } from './dto/create-testtt.dto';
import { UpdateTestttDto } from './dto/update-testtt.dto';
export declare class TestttController {
    private readonly testttService;
    constructor(testttService: TestttService);
    create(createTestttDto: CreateTestttDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTestttDto: UpdateTestttDto): string;
    remove(id: string): string;
}
