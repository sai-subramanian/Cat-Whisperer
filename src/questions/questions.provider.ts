import { DataSource } from 'typeorm';
import { Questions } from './entity/questions.entity';

export const QuestionsRepository = [
  {
    provide: 'QUESTIONS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Questions),
    inject: ['DATA_SOURCE'],
  },
];
