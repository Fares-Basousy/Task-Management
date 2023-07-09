import * as Mongoose from 'mongoose';
export declare const TaskSchema: Mongoose.Schema<any, Mongoose.Model<any, any, any, any>, any, any>;
export interface Task extends Mongoose.Document {
    title: string;
    id: string;
    status: boolean;
    timespent: BigInteger;
}
