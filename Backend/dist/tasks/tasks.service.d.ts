import { Model } from 'mongoose';
import { ITask } from './entities/task.entity';
export declare class TasksService {
    private readonly TaskModel;
    constructor(TaskModel: Model<ITask>);
    add(Title: string, Userid: string): Promise<ITask & {
        _id: any;
    }>;
    findAll(Userid: string): Promise<(ITask & {
        _id: any;
    })[]>;
    findOne(Userid: string, Title: string): Promise<(ITask & {
        _id: any;
    })[]>;
    update(Userid: string, Title: string, changedData: string, newValue: any): Promise<ITask & {
        _id: any;
    }>;
    remove(Userid: string, Title: string): Promise<string>;
    ChangeStatus(userid: string, Title: string): Promise<ITask>;
    return: any;
}
