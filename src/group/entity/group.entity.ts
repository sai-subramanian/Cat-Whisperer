import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entity/product.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 250 })
  groupId: string;

  @Column('varchar', { length: 250 })
  discription: string;

  @Column()
  isActive: boolean;

  @Column()
  createdAt: Date;

  @ManyToMany(() => Product, (Product) => Product.id)
  @JoinTable()
  Products: Product[];
}
