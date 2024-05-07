import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { QuestionType, QuestionTypeSchema } from "./schemas/questionType.schema";
import { QuestionController } from "src/question/question.controller";
import { QuestionService } from "src/question/question.service";
import { QuestionTypeController } from "./questionType.controller";
import { QuestionTypeService } from "./questionType.service";

@Module({
    imports:[
        MongooseModule.forFeature([
          {
            name:QuestionType.name,
            schema:QuestionTypeSchema
          }
        ])
    ],
    controllers:[QuestionTypeController],
    providers:[QuestionTypeService]
})
export class QuestionTypeModule {}