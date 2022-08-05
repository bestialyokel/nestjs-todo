import { Field, Int, ObjectType } from "@nestjs/graphql";
import { CategoryDto } from "src/category/dto/category.dto";

@ObjectType()
export class TodoDto {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    text: String;

    @Field(type => Boolean)
    completed: boolean;

    @Field(type => Int)
    categoryId: number;
}