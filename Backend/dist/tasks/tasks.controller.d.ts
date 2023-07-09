import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    create(title: string, userid: any): Promise<{
        msg: string;
        newtask: import("./entities/task.entity").ITask & {
            _id: any;
        };
    }>;
    findAll(): Promise<(import("./entities/task.entity").ITask & {
        _id: any;
    })[]>;
    findOne(userid: string, title: string): Promise<(import("./entities/task.entity").ITask & {
        _id: any;
    })[]>;
    update(userid: string, title: string, changedData: string, nweValue: string): Promise<import("./entities/task.entity").ITask & {
        _id: any;
    }>;
    remove(userid: string, title: string): Promise<string>;
    Status(id: string, TaskId: string): Promise<{
        message: string;
        user: import("./entities/task.entity").ITask;
    }>;
}
