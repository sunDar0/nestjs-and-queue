import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    title: string;

    @Column({nullable: true})
    image: string;

    @Column({nullable: true})
    contents: string;

    @Column({default:0})
    likes: number;

}