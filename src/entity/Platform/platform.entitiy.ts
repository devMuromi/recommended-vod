import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class platform {
  @PrimaryGeneratedColumn()
  platform_id: number;

  @Column({ length: 500 })
  Name: string;
}
