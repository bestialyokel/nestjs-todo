import { Query, Resolver } from '@nestjs/graphql';

import { CategoryDto } from './dto/category.dto';

@Resolver()
export class CategoryResolver {

    @Query(() => [CategoryDto])
    async categories() {
        return [];
    }

}
