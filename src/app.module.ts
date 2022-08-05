import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { CategoryService } from './category/category.service';
import { Category } from './category/entities/category';
import { Todo } from './todo/entities/todo';
import { TodoModule } from './todo/todo.module';

@Module({
    imports: [
		TodoModule,
		CategoryModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			playground: true,
			autoSchemaFile: true
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DATABASE_URL,
			entities: [Category, Todo],
			synchronize: false
		})
	],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
