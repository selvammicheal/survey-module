import { Module } from '@nestjs/common';
import { SurveyModule } from './survey/survey.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionModule } from './question/question.module';
import { SurveyController } from './survey/survey.controller';
import { QuestionController } from './Question/question.controller';
import { SurveyService } from './survey/survey.service';
import { QuestionService } from './Question/question.service';
import { QuestionTypeModule } from './QuestionType/questionType.module';
import { SectionModule } from './Sections/section.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://bmanikandan:MnVQfCcyKC0k3Zdt@cluster0.8icnudk.mongodb.net'),
    MongooseModule.forRoot('mongodb+srv://selvam:YseGf1XzOPRmbxrc@users.yh49p1d.mongodb.net'),
    SurveyModule,
    QuestionModule,
    QuestionTypeModule,
    SectionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
