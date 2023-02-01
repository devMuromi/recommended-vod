import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne } from 'typeorm';
import { Content } from '../../contents/entities/content.entity';

@Entity()
export class Platform {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128, unique: true, nullable: false })
  name: string;

  @OneToMany((type) => Vod, (Vod) => Vod.platform)
  vods: Vod[];
}

@Entity()
export class Vod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 4, nullable: false })
  type: number;

  @Column({ length: 64, nullable: true })
  rentalPeriod: string; // It is just for information so we don't need to set it to number

  @Column({ length: 64, nullable: true })
  price: number;

  @ManyToOne((type) => Platform, (platform) => platform.vods)
  platform: Platform;

  @ManyToOne((type) => Content, (content) => content.vods)
  content: Content;
}
