import { DataSource } from 'typeorm';
import { platform } from './Genre.entitiy';

export const platformProviders = [
    {
        provide: 'platform_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(platform),
        inject: ['DATA_SOURCE'],
    },
];
