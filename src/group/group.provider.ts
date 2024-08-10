import { DataSource } from 'typeorm';
import { Group } from './entity/group.entity';

export const GroupRepository = [
  {
    provide: 'GROUP_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Group),
    inject: ['DATA_SOURCE'],
  },
];
