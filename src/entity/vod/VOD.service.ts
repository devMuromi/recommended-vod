import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VOD } from './VOD.entitiy';

@Injectable()
export class VODService {
    constructor(
        @Inject('VOD_REPOSITORY')
        private VODRepository: Repository<VOD>,
    ) {}

    async findAll(): Promise<VOD[]> {
        return this.VODRepository.find();
    }
}
