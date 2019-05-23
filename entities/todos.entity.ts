import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('boolean', { default: 0 })
  completed: number;
}