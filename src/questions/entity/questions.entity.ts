import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from '../../group/entity/group.entity';

@Entity()
export class Questions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @ManyToOne(() => Group, (Group) => Group.id)
  groupId: Group;

  @Column()
  hazards: string;

  @Column()
  isActive: boolean;
}
