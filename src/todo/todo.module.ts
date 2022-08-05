import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'src/category/category.module';
import { Todo } from './entities/todo';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

@Module({
    imports: [TypeOrmModule.forFeature([Todo]), forwardRef(() => CategoryModule)],
    providers: [TodoResolver, TodoService],
    exports: [TodoService]
  })
export class TodoModule {}
