import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne } from 'typeorm';
import { Content } from '../../contents/entities/content.entity';

@Entity()
export class Platform {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128, unique: true, nullable: false })
  name: string;

  @OneToMany((type) => VOD, (vod) => vod.platform)
  vods: VOD[];
}

@Entity()
export class VOD {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  type: string;

  @Column('int')
  rent_period: number;

  @ManyToOne((type) => Platform, (platform) => platform.vods)
  platform: Platform;

  @ManyToOne((type) => Content, (content) => content.vods)
  content: Content;
}
