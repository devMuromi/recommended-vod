import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @ManyToOne((type) => Category, (category) => category.contents)
  category: Category;

  @ManyToOne((type) => Genre, (genre) => genre.contents)
  genre: Category;

  @Column({ length: 500 })
  Image_URL: string;
}

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  Category_id: number;

  @Column({ length: 500 })
  Name: string;

  @OneToMany((type) => Content, (content) => content.category)
  contents: Content[];
}

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  Genre_id: number;

  @Column({ length: 500 })
  Name: string;

  @OneToMany((type) => Content, (content) => content.genre)
  contents: Content[];
}
