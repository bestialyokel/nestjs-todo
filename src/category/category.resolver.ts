import { forwardRef, Inject } from '@nestjs/common';
import { Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TodoDto } from 'src/todo/dto/todo.dto';
import { TodoService } from 'src/todo/todo.service';
import { CategoryService } from './category.service';

import { CategoryDto } from './dto/category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Resolver(of => CategoryDto)
export class CategoryResolver {

    constructor( 
        protected categoryService: CategoryService,
        @Inject(forwardRef(() => TodoService))
        protected todoService: TodoService ) {}

    @Query(returns => [CategoryDto])
    async categories() {
        return this.categoryService.getAllCategories();
    }

    @Mutation(returns => CategoryDto)
    async createCategory(createCategoryDto: CreateCategoryDto) {
        return this.categoryService.createCategory(createCategoryDto);
    }

    @ResolveField(returns => [TodoDto])
    async todos(@Parent() category: CategoryDto) {
        const {id} = category;
        return this.todoService.getCategoryTodos(id);
    }


}
