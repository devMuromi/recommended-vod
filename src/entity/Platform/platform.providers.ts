import { DataSource } from 'typeorm';
import { platform } from './platform.entitiy';

export const platformProviders = [
    {
        provide: 'platform_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(platform),
        inject: ['DATA_SOURCE'],
    },
];
