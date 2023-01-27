import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { CreateContentDto, UpdateContentDto } from './dto/content.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) {}

  create(content: any) {
    return this.contentRepository.save(content);
  }

  findAll(): Promise<Content[]> {
    return this.contentRepository.find();
  }

  findOne(id: number): Promise<Content> {
    return this.contentRepository.findOneBy({ id });
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return `This action updates a #${id} content`;
  }

  remove(id: number) {
    return `This action removes a #${id} content`;
  }
}

@Injectable()
export class CategoriesService {
  create(CreateCategoryDto: CreateCategoryDto) {
    return `Category ${CreateCategoryDto.name} created(actually not)`;
  }

  findAll() {
    return `This action returns all cagegories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  // update(id: number, updateContentDto: UpdateContentDto) {
  //   return `This action updates a #${id} category`;
  // }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}

@Injectable()
export class GenresService {
  create(CreateCategoryDto: CreateGenreDto) {
    return `Genre ${CreateGenreDto.name} created(actually not)`;
  }

  findAll() {
    return `This action returns all genres`;
  }

  findOne(id: number) {
    return `This action returns a #${id} genre`;
  }

  // update(id: number, updateContentDto: UpdateContentDto) {
  //   return `This action updates a #${id} genre`;
  // }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
