import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Content } from './content.entitiy';

@Injectable()
export class ContentService {
    constructor(
        @Inject('CONTENT_REPOSITORY')
        private ContentRepository: Repository<Content>,
    ) {}

    async findAll(): Promise<Content[]> {
        return this.ContentRepository.find();
    }
}
