import { DataSource } from 'typeorm';
import { Genre } from './Genre.entitiy';

export const GenreProviders = [
    {
        provide: 'Genre_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Genre),
        inject: ['DATA_SOURCE'],
    },
];
