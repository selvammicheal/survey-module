import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { QuestionType } from "./schemas/questionType.schema";

 @Injectable()
 export class QuestionTypeService {
    constructor(
        @InjectModel(QuestionType.name) private readonly questionTypeModel: Model<QuestionType>,
    ) {}

    async createQuestionType(questionType){
        const questionTypeData = new this.questionTypeModel(questionType);
        return questionTypeData.save();
    }

    async getAllQuestionType() {
        return await this.questionTypeModel.find();
    }
 }