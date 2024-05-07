import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Survey } from 'src/survey/schemas/survey.schema';
import { Question, QuestionSchema } from './schemas/question.schema';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
    imports:[ 
        MongooseModule.forFeature([
            {
                name:Question.name,
                schema:QuestionSchema
            }
        ])
    ],
    controllers:[QuestionController],
    providers:[QuestionService]
})
export class QuestionModule {}
