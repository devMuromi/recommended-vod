import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { type } from 'os';
import { DataSource, Repository } from 'typeorm';

import { CreateContentDto, UpdateContentDto } from './dto/content.dto';
import { CreateCategoryDto } from './dto/category.dto';
import { CreateGenreDto } from './dto/genre.dto';
import { Content, Category, Genre } from './entities/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) {}

  async create(createContentDto: CreateContentDto): Promise<any> {
    const content = this.contentRepository.create(createContentDto);
    this.contentRepository.save(content);
    return content;
  }

  findAll(): Promise<Content[]> {
    return this.contentRepository.find();
  }

  findOneById(id: number): Promise<Content> {
    const content = this.contentRepository.findOneBy({ id });

    if (!content) {
      throw new NotFoundException(`Can't find content with id ${id}`);
    }
    return content;
  }

  // update(id: number, updateContentDto: UpdateContentDto) {
  //   return `This action updates a #${id} content`;
  // }

  async remove(id: number): Promise<void> {
    await this.contentRepository.delete(id);
  }
}

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Content)
    private categoryRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    this.categoryRepository.save(category);
    return category;
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOneById(id: number): Promise<Category> {
    const category = this.categoryRepository.findOneBy({ id });

    if (!category) {
      throw new NotFoundException(`Can't find category with id ${id}`);
    }
    return category;
  }

  // update(id: number, updateContentDto: UpdateContentDto) {
  //   return `This action updates a #${id} category`;
  // }

  async remove(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Content)
    private genreRepository: Repository<Genre>,
  ) {}
  create(createGenreDto: CreateGenreDto) {
    const genre = this.genreRepository.create(createGenreDto);
    this.genreRepository.save(genre);
    return genre;
  }

  findAll(): Promise<Genre[]> {
    return this.genreRepository.find();
  }

  findOneById(id: number): Promise<Genre> {
    const genre = this.genreRepository.findOneBy({ id });

    if (!genre) {
      throw new NotFoundException(`Can't find genre with id ${id}`);
    }
    return genre;
  }

  // update(id: number, updateContentDto: UpdateContentDto) {
  //   return `This action updates a #${id} genre`;
  // }

  async remove(id: number): Promise<void> {
    await this.genreRepository.delete(id);
  }
}
