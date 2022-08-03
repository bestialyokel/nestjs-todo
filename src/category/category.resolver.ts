import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { CategoryDto } from './dto/category.dto';

@Resolver()
export class CategoryResolver {

    @Query(returns => [CategoryDto])
    async categories() {
        return [];
    }

}
