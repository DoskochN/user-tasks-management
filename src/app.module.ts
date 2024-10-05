import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { User } from './tasks/entities/user.entity/user.entity';
import { Profile } from './tasks/entities/profile.entity/profile.entity';
import { Task } from './tasks/entities/task.entity/task.entity';
import { SubTask } from './tasks/entities/subtask.entity/subtask.entity';
import { TaskCategory } from './tasks/entities/task-category.entity/task-category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tasktestdb',
      entities: [User, Profile, Task, SubTask, TaskCategory],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([User, Profile, Task, SubTask, TaskCategory]),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
