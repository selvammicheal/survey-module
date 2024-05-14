import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Question, QuestionSchema } from 'src/Question/schemas/question.schema';
import { Section, SectionSchema } from './schemas/section.schema';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';
import { APP_FILTER } from '@nestjs/core';
import { CustomExceptionFilter } from 'src/error-handling.filter';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Section.name,
                schema: SectionSchema
            }
        ])
    ],
    controllers: [SectionController],
    providers: [SectionService, {
        provide: APP_FILTER,
        useClass: CustomExceptionFilter,
    }]
})
export class SectionModule { }
