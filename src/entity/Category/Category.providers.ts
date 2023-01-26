import { DataSource } from 'typeorm';
import { Category } from './Category.entitiy';

export const CategoryProviders = [
    {
        provide: 'Category_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
        inject: ['DATA_SOURCE'],
    },
];
