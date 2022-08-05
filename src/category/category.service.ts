import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category) protected categoryRepository: Repository<Category>
      ) {}

    async getAllCategories() {
        return this.categoryRepository.find();
    }
    
    async findByTitle(title: string) {
        return this.categoryRepository.findOne({
            where: {title}
        });
    }

    async getById(id: number) {
        return this.categoryRepository.findOne({
            where: {
                id
            }
        });
    }

    async createCategory(createCategoryDto: CreateCategoryDto) {
        const result = await this.categoryRepository.insert({
            title: createCategoryDto.title
        });

        return this.categoryRepository.findOne({
            where: {
                id: result.generatedMaps[0].id
            }
        })
    }
}
