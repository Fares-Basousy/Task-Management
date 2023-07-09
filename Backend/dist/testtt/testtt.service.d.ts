import { CreateTestttDto } from './dto/create-testtt.dto';
import { UpdateTestttDto } from './dto/update-testtt.dto';
export declare class TestttService {
    create(createTestttDto: CreateTestttDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTestttDto: UpdateTestttDto): string;
    remove(id: number): string;
}
