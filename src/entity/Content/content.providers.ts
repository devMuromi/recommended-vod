import { DataSource } from 'typeorm';
import { VOD } from './content.entitiy';

export const VODProviders = [
    {
        provide: 'VOD_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(VOD),
        inject: ['DATA_SOURCE'],
    },
];
