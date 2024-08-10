import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from '../../group/entity/group.entity';

@Entity()
export class Questions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @ManyToOne(() => Group, (Group) => Group.id)
  @JoinColumn({ name: 'groupId' })
  groupId: Group;

  @Column()
  hazards: string;

  @Column()
  isActive: boolean;
}
