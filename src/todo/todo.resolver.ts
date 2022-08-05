import { forwardRef, Inject, Logger } from '@nestjs/common';
import { Args, Int, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CategoryService } from 'src/category/category.service';
import { CategoryDto } from 'src/category/dto/category.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';

@Resolver(of => TodoDto)
export class TodoResolver {

    constructor(
        protected todoService: TodoService,
        @Inject(forwardRef(() => CategoryService))
        protected categoryService: CategoryService ) {}
    
    @Mutation(returns => TodoDto)
    async createTodo(@Args('input') createData: CreateTodoDto ) {
        return this.todoService.createTodo(createData);
    }

    @ResolveField(returns => CategoryDto)
    async category(@Parent() todo: TodoDto) {
        return this.categoryService.getById(todo.categoryId);
    }

    @Mutation(returns => TodoDto)
    async completeTodo(@Args({ name: 'id', type: () => Int}) todoId: number) {
        return this.todoService.completeTodo(todoId);
    }
}
