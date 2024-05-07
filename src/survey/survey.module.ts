import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Survey, SurveySchema } from './schemas/survey.schema';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { Question, QuestionSchema } from 'src/Question/schemas/question.schema';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: Survey.name,
                schema: SurveySchema
            }
        ])
    ],
    controllers:[SurveyController],
    providers:[SurveyService]
})
export class SurveyModule {} 
