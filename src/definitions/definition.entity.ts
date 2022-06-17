import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Definition {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  word: string;

  @Column()
  definition: string;
}
