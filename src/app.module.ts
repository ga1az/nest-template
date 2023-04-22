import { Module } from '@nestjs/common';
import { TaskController } from './modules/task/controllers/task.controller';

@Module({
  imports: [TaskController],
  controllers: [],
  providers: [],
})
export class AppModule {}
