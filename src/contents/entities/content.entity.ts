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
  genre: Genre;

  @OneToMany((type) => VOD, (vod) => vod.content)
  vods: VOD[];

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

@Entity()
export class Platform {
  @PrimaryGeneratedColumn()
  Platform_id: number;

  @Column({ length: 500 })
  Name: string;

  @OneToMany((type) => VOD, (VOD) => VOD.platform)
  vods: VOD[];
}

@Entity()
export class VOD {
  @PrimaryGeneratedColumn()
  VOD_id: number;

  @Column({ length: 500 })
  type: string;

  @Column('int')
  rent_period: number;

  @ManyToOne((type) => Platform, (platform) => platform.vods)
  platform: Platform;

  @ManyToOne((type) => Content, (content) => content.vods)
  content: Content;

  @Column({ length: 500 })
  vod_name: string;
}
