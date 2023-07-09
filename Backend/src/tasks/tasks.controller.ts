import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private  tasksService: TasksService) {}

  @Post('/:id/addtask')
  async create(@Body("title") title: string,@Param (':id') userid) {
     const newtask = await this.tasksService.add(title,userid);
    return {msg : "Task created sucessfully",
      newtask};
  }

  @Get('/:id/findalltask')
  findAll() {
    return this.tasksService.findAll(":id");
  }

  @Get('/:id/findtask')
  findOne(@Param('id') userid: string,@Body("title") title:string) {
    return this.tasksService.findOne(userid,title);
  }

  @Patch('/:id/updatetask')
  update(@Param(':id') userid: string, @Body("title") title:string, @Body("changedData") changedData:string, @Body("newValue") nweValue:string) {
    return this.tasksService.update(userid, title, changedData, nweValue);
  }

  @Delete('/:id/removetask')
  remove(@Param('id') userid: string,@Body("title") title:string) {
    return this.tasksService.remove(userid,title);
  }

  @Post('/:id/changestatus')
  async Status(@Param('id') id: string, @Body('TaskId') TaskId: string) {
    const updatedUser = await this.tasksService.ChangeStatus(id, TaskId);
    return {
      message: 'Status changed successfully',
      user: updatedUser,} } }