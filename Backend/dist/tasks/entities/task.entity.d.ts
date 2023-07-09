import { Schema, Document } from 'mongoose';
export declare const Taskschema: Schema<any, import("mongoose").Model<any, any, any, any>, any, any>;
export declare const TaskModel: import("mongoose").Model<any, {}, {}, {}>;
export interface ITask extends Document {
    title: string;
    id: string;
    status: boolean;
    timespent: BigInteger;
    LastActiveDate: Date;
    userid: String;
}
