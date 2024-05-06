import { Module } from '@nestjs/common';
import { SurveyModule } from './survey/survey.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://bmanikandan:MnVQfCcyKC0k3Zdt@cluster0.8icnudk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    SurveyModule,
    QuestionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
