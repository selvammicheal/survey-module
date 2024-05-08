import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Question, QuestionSchema } from 'src/Question/schemas/question.schema';
import { Section, SectionSchema } from './schemas/section.schema';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: Section.name,
                schema: SectionSchema
            }
        ])
    ],
    controllers:[SectionController],
    providers:[SectionService]
})
export class SectionModule {} 
