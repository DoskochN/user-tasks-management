import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity/task.entity';

@Module({
  providers: [TasksService],
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
})
export class TasksModule {}
