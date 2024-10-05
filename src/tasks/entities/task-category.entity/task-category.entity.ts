import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('taskCategories')
export class TaskCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
