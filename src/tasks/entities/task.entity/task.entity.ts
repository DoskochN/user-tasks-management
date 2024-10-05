import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Profile } from '../profile.entity/profile.entity';
import { SubTask } from '../subtask.entity/subtask.entity';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Profile, (profile) => profile.tasks)
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;

  @OneToMany(() => SubTask, (subTask) => subTask.task)
  subTasks: SubTask[];
}
