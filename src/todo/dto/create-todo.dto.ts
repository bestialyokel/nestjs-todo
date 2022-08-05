import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTodoDto {

    @Field(type => String)
    categoryName: string;

    @Field(type => String)
    text: string;
}