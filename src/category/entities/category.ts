import { Todo } from "src/todo/entities/todo";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categories' })
export class Category {
    @PrimaryGeneratedColumn({ name: 'category_id' })
    id: number;

    @Column({ name: 'category_title' })
    title: string;
}