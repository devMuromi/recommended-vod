import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { VOD } from '../../platforms/entities/platform.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128, unique: true, nullable: false })
  name: string;

  @OneToMany((type) => Content, (content) => content.category)
  contents: Content[];
}

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128, unique: true, nullable: false })
  name: string;

  @OneToMany((type) => Content, (content) => content.genre)
  contents: Content[];
}

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128, unique: true, nullable: false })
  title: string;

  @Column({ length: 256, nullable: true })
  image_url: string;

  @ManyToOne((type) => Category, (category) => category.contents)
  category: Category;

  @ManyToOne((type) => Genre, (genre) => genre.contents)
  genre: Genre;

  @OneToMany((type) => VOD, (vod) => vod.content)
  vods: VOD[];
}
