import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entity/product.entity';
import { Questions } from '../../questions/entity/questions.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 250 })
  groupId: string;

  @Column('varchar', { length: 250 })
  description: string;

  @Column()
  isActive: boolean;

  @Column()
  createdAt: Date;

  @ManyToMany(() => Product, (Product) => Product.id)
  @JoinTable()
  Products: Product[];

  @OneToMany(() => Questions, Questions => Questions.id)
  products: Product[];
}
