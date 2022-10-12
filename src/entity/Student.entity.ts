import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('Student')
export class Student {

  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  name: string;

  @Column()
  age: number;
 
  @Column({ default: false })
  complete: boolean;
}