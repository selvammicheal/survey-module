import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Question, QuestionSchema } from './schemas/question.schema';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { QuestionTypeService } from 'src/QuestionType/questionType.service';
import { QuestionType, QuestionTypeSchema } from 'src/QuestionType/schemas/questionType.schema';

@Module({
    imports:[ 
        MongooseModule.forFeature([
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
    controllers:[QuestionController],
    providers:[QuestionService, QuestionTypeService]
})
export class QuestionModule {}
