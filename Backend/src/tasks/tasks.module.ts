import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Taskschema } from './entities/task.entity';



@Module({
  imports:[MongooseModule.forFeature([{name: 'task', schema: Taskschema}])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
