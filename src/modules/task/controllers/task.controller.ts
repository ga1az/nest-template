import { Controller, Get } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { TaskDAL } from '../dal/task.dal';


@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTask(): TaskDAL {
    return this.taskService.getTask();
  }
}
