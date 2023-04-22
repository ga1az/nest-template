import { Injectable } from '@nestjs/common';
import { TaskDAL } from '../dal/task.dal';

@Injectable()
export class TaskService {
  getTask(): TaskDAL {
    return TaskDAL.getTask();
  }
}
