import { Category } from "src/category/entities/category";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'todos' })
export class Todo {
    @PrimaryGeneratedColumn({ name: 'todo_id' })
    id: number;

    @Column({ name: 'category_id' })
    categoryId: number;

    @Column({ name: 'todo_text' })
    text: string;

    @Column({ name: 'todo_completed' })
    completed: boolean;
}