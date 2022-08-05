import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category';
import { TodoModule } from 'src/todo/todo.module';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';

@Module({
	imports: [TypeOrmModule.forFeature([Category]), forwardRef(() => TodoModule)],
  providers: [CategoryResolver, CategoryService],
	exports: [CategoryService]
})
export class CategoryModule {}
