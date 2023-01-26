import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './Category.entitiy';

@Injectable()
export class CategoryService {
    constructor(
        @Inject('CATEGORY_REPOSITORY')
        private CategoryRepository: Repository<Category>,
    ) {}

    async findAll(): Promise<Category[]> {
        return this.CategoryRepository.find();
    }
}
