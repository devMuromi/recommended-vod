import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class platform {
    @PrimaryGeneratedColumn()
    platform_id: number;

    @Column()
    Name: string;
}
