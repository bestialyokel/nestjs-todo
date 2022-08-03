import { ArgsType, Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CategoryDto {
    @Field(type => Int)
    id: number;

    @Field(type => String)
    title: String;
}