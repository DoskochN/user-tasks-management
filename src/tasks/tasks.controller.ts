import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('v1/user/:userId')
  async getTasksForUser(@Param('userId') userId: number) {
    return await this.tasksService.findSubTasksByUserId(userId);
  }

  @Get('v2/user/:userId')
  async getSubTasksForUser(@Param('userId') userId: number) {
    return await this.tasksService.findSubTasksByUserIdSimple(userId);
  }
}
