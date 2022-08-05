import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './entities/todo';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo) protected todoRepository: Repository<Todo>,
        @Inject(forwardRef(() => CategoryService))
        protected categoryService: CategoryService ) {}

    async createTodo( createTodoDto: CreateTodoDto ) {
        const title = createTodoDto.categoryName;
        const category = await this.categoryService.findByTitle(title)
            || await this.categoryService.createCategory({title});

        const result = await this.todoRepository.insert( {
            categoryId: category.id,
            text: createTodoDto.text,
            completed: false
        });

        return this.todoRepository.findOne({
            where: {id: result.generatedMaps[0].id }
        });
    }
    
    async completeTodo( todoId: number ) {
        await this.todoRepository.update(todoId, {completed: true});
        return this.todoRepository.findOne({
            where: {id: todoId}
        });
    }

    async getCategoryTodos(categoryId: number) {
        return this.todoRepository.find({
            where: {
                categoryId: categoryId
            }
        });
    }
}
