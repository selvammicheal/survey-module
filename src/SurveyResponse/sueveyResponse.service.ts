import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";
import { SurveyResponse } from "./schemas/sueveyResponse.schema";

 @Injectable()
 export class SurveyResponseService {
    constructor(
        @InjectModel(SurveyResponse.name) private readonly surveyResponseModel: Model<SurveyResponse>,
    ) {}

    async submitResponseBySurvey(responses){
        return await this.surveyResponseModel.insertMany(responses);
    }

    async getAllQuestionType() {
        return await this.surveyResponseModel.find();
    }

    async getQuestionType(id: ObjectId) {
        return await this.surveyResponseModel.findById(id);
    }
 }