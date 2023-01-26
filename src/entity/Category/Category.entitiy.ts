import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    Category_id: number;

    @Column({ length: 500 })
    Name: string;
}
