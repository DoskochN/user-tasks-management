import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Task } from '../task.entity/task.entity';

@Entity('subtasks')
export class SubTask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Task, (task) => task.subTasks)
  @JoinColumn({ name: 'task_id' })
  task: Task;
}
