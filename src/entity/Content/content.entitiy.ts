import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  Content_id: number;

  @Column({ length: 500 })
  Title: string;

  @Column('int')
  Category_ID: number;

  @Column('int')
  Genre_ID: number;

  @Column({ length: 500 })
  Image_URL: string;
}