import { Module } from '@nestjs/common';
import { SurveyModule } from './survey/survey.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionModule } from './question/question.module';
import { SurveyController } from './survey/survey.controller';
import { QuestionController } from './Question/question.controller';
import { SurveyService } from './survey/survey.service';
import { QuestionService } from './Question/question.service';
import { QuestionTypeModule } from './QuestionType/questionType.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://selvam:YseGf1XzOPRmbxrc@users.yh49p1d.mongodb.net/?retryWrites=true&w=majority&appName=Users'),
    SurveyModule,
    QuestionModule,
    QuestionTypeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
