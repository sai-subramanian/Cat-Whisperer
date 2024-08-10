import {
  Column,
  Entity,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from '../../group/entity/group.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 250 })
  name: string;

  @Column()
  createdAt: Date;

  @Column()
  isActive: boolean;

  @ManyToMany(() => Group, (Group) => Group.id)
  subAreas: Group[];
}
