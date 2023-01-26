import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    Genre_id: number;

    @Column({ length: 500 })
    Name: string;
}
