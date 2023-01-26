import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Genre } from './Genre.entitiy';

@Injectable()
export class GenreService {
    constructor(
        @Inject('GENRE_REPOSITORY')
        private GenreRepository: Repository<Genre>,
    ) {}

    async findAll(): Promise<Genre[]> {
        return this.GenreRepository.find();
    }
}
