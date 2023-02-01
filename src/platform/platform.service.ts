import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { Platform, Vod } from './entities/platform.entity';
import { CreatePlatformDto } from './dto/platform.dto';
import { CreateVodDto } from './dto/vod.dto';

@Injectable()
export class PlatformService {
  constructor(
    @InjectRepository(Platform)
    private platformRepository: Repository<Platform>,
  ) {}

  async create(createPlatformDto: CreatePlatformDto): Promise<any> {
    const platform = this.platformRepository.create(createPlatformDto);
    this.platformRepository.save(platform);
    return platform;
  }

  findAll(): Promise<Platform[]> {
    return this.platformRepository.find();
  }

  findOneById(id: number): Promise<Platform> {
    const platform = this.platformRepository.findOneBy({ id });

    if (!platform) {
      throw new NotFoundException(`Can't find platform with id ${id}`);
    }
    return platform;
  }

  async remove(id: number): Promise<void> {
    await this.platformRepository.delete(id);
  }
}

export class VodService {
  constructor(
    @InjectRepository(Vod)
    private vodRepository: Repository<Vod>,
  ) {}

  async create(createVodDto: CreateVodDto): Promise<any> {
    const vod = this.vodRepository.create(createVodDto);
    this.vodRepository.save(vod);
    return vod;
  }

  findAll(): Promise<Vod[]> {
    return this.vodRepository.find();
  }

  findOneById(id: number): Promise<Vod> {
    const vod = this.vodRepository.findOneBy({ id });

    if (!vod) {
      throw new NotFoundException(`Can't find vod with id ${id}`);
    }
    return vod;
  }

  async remove(id: number): Promise<void> {
    await this.vodRepository.delete(id);
  }
}
