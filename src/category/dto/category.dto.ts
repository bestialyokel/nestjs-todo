import { Field, Int, ObjectType } from "@nestjs/graphql";
import { TodoDto } from "src/todo/dto/todo.dto";

@ObjectType()
export class CategoryDto {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    title: String;

    @Field(type => [TodoDto])
    todos: TodoDto[];
}