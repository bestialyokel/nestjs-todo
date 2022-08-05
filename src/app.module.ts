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
			host: 'postgres',
			port: 5432,
			username: 'oblako_user',
			password: 'password',
			database: 'oblako_db',
			entities: [Category, Todo]
		})
	],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
