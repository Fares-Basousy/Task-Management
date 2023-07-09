import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { TaskModel, ITask} from './entities/task.entity';
import { title } from 'process';

@Injectable()
export class TasksService {
  constructor(@InjectModel('task') private readonly TaskModel: Model<ITask>) {}
  async add(Title: string, Userid: string){ 
      const title = Title.toLowerCase();
      const userid = Userid
      const newtask = new this.TaskModel({
        title,
        userid, })
  return newtask;
  }

    async findAll(Userid: string) {
      const tasks = await this.TaskModel.find({ userid: Userid })
      return tasks;
    }

  async findOne(Userid:string,Title: string) {
    
      const task = await this.TaskModel.find({ userid: Userid, title:Title })
      return task;
  }

  async update(Userid:string,Title: string,changedData:string,newValue:any) {
    const task = await this.TaskModel.findOneAndUpdate({ userid: Userid, title:Title },{changedData:newValue},{ new: true })
    return task;
  }

  async remove(Userid:string,Title: string) {
    const task = await this.TaskModel.findOneAndDelete({ userid: Userid, title:Title })
    return `Document Deleted Sucessfully`;
  }
   async  ChangeStatus(userid: string, Title: string): Promise<ITask> {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      Title,
      {
        $set: {
          fun: {
            $function: {
              body: function (
                LastActiveDate: Date,
                status: boolean,
                timespent: number,
                timespentUSR: string
              ) {
                if (status == true) {
                  let date = new Date();
                  let diff = date.getTime() - LastActiveDate.getTime();
                  diff /= 1000;
                  timespent += diff;
                  let hours = Math.floor(diff / 3600);
                  let minutes = Math.floor((diff % 3600) / 60);
                  diff = diff % 60;
  
                  let HH = hours < 10 ? "0" + hours : hours;
                  let MM = minutes < 10 ? "0" + minutes : minutes;
                  let SS = diff < 10 ? "0" + diff : diff;
                  timespentUSR = HH + ":" + MM + ":" + SS;
                  return {
                    LastActiveDate: date,
                    status: !status,
                    timespentUSR: timespentUSR,
                  };
                } else {
                  return { status: false };
                }
              },
              args: [
                '$fun.LastActiveDate',
                '$fun.status',
                '$fun.timespent',
                '$fun.timespentUSR',
              ],
              lang: 'js',
            },
          },
        },
      },
      { new: true }
    );
  
    return updatedTask;
  }
  return ;
}  