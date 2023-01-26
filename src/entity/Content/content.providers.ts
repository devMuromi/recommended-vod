import { DataSource } from 'typeorm';
import { Content } from './content.entitiy';

export const ContentProviders = [
    {
        provide: 'CONTENT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Content),
        inject: ['DATA_SOURCE'],
    },
];
