import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { QuestionController } from "src/question/question.controller";
import { QuestionService } from "src/question/question.service";
import { SurveyResponseController } from "./surveyResponse.controller";
import { SurveyResponseService } from "./sueveyResponse.service";
import { SurveyResponse, SurveyResponseSchema } from "./schemas/sueveyResponse.schema";

@Module({
    imports:[
        MongooseModule.forFeature([
          {
            name:SurveyResponse.name,
            schema:SurveyResponseSchema
          }
        ])
    ],
    controllers:[SurveyResponseController],
    providers:[SurveyResponseService]
})
export class SurveyResponseModule {}