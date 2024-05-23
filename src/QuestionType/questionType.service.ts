import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { QuestionType } from "./schemas/questionType.schema";
import { ObjectId } from "mongodb";

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
        const data = await this.questionTypeModel.find();
        console.log(data)
        return data
    }

    async getQuestionType(id: ObjectId) {
        return await this.questionTypeModel.findById(id);
    }
 }