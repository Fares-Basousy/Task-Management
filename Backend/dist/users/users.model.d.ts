import * as Mongoose from 'mongoose';
export declare const UserSchema: Mongoose.Schema<any, Mongoose.Model<any, any, any, any>, any, any>;
export interface User extends Mongoose.Document {
    _id: string;
    username: string;
    password: string;
}
