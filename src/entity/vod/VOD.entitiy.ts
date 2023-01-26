import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class VOD {
    @PrimaryGeneratedColumn()
    VOD_id: number;

    @Column('int')
    type: number;

    @Column('int')
    buy_price: number;

    @Column('int')
    rent_period: number;

    @Column('int')
    platform_ID: number;

    @Column('int')
    content_ID: number;

    @Column({ length: 500 })
    VOD_name: string;

}
