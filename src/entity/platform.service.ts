import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { platform } from './platform.entitiy';

@Injectable()
export class platformService {
    constructor(
        @Inject('PLATFORM_REPOSITORY')
        private platformRepository: Repository<platform>,
    ) {}

    async findAll(): Promise<platform[]> {
        return this.platformRepository.find();
    }
}
