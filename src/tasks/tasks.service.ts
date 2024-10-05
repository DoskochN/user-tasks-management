import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findSubTasksByUserId(userId: number) {
    console.log('--->v1<---');
    return this.taskRepository
      .createQueryBuilder('task')
      .innerJoinAndSelect('task.profile', 'profile')
      .innerJoinAndSelect('profile.user', 'user')
      .innerJoinAndSelect('task.subTasks', 'subTask')
      .where('user.id = :userId', { userId })
      .getMany();
  }

  async findSubTasksByUserIdSimple(userId: number) {
    console.log('--->v2<---');
    return this.taskRepository.find({
      where: {
        profile: {
          user: {
            id: userId,
          },
        } as any,
      },
      relations: ['profile', 'profile.user', 'subTasks'],
    });
  }
}
