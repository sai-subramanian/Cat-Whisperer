import { Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export class Product{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('varchar',{length:250})
    name:string;

    @Column()
    createdAt: Date;

    @Column()
    isActive:boolean;

}
