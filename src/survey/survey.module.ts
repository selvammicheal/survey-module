import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Survey, SurveySchema } from './schemas/survey.schema';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { Question, QuestionSchema } from 'src/Question/schemas/question.schema';
import { Section, SectionSchema } from 'src/Sections/schemas/section.schema';
import { SectionService } from 'src/Sections/section.service';
import { QuestionService } from 'src/question/question.service';
import { QuestionTypeService } from 'src/QuestionType/questionType.service';
import { QuestionType, QuestionTypeSchema } from 'src/QuestionType/schemas/questionType.schema';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: Survey.name,
                schema: SurveySchema
            },
            {
                name: Section.name,
                schema: SectionSchema
            },
            {
                name:Question.name,
                schema:QuestionSchema
            },
            {
                name:QuestionType.name,
                schema:QuestionTypeSchema
            }
        ])
    ],
    controllers:[SurveyController],
    providers:[SurveyService, SectionService, QuestionService, QuestionTypeService]
})
export class SurveyModule {} 
