import {Schema, model, Document}  from 'mongoose';
export  const Taskschema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    userid: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    id: {
      type: Schema.Types.ObjectId,
      index: true,
      required: true,
      auto: true,
      unique:true,
    },
    status:{
        type: Boolean,
        default: true,
    },

    timespent:{ 
      type: Number
    },
    timespentUSR:{
      type: String
    },

    LastActiveDate: { 
    type: Date,
    default: Date.now 
    }
     });
export const TaskModel = model("Task", Taskschema);


// Task interface
export interface ITask extends Document {
  title: string;
  id: string;
  status: boolean;
  timespent: BigInteger;
  LastActiveDate: Date;
  userid: String

}