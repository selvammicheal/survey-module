import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Survey } from './schemas/survey.schema';
import { Model } from 'mongoose';
import { createSurveyDto } from './dto/createSurveyDto.dto';
import { Question } from 'src/Question/schemas/question.schema';

@Injectable()
export class SurveyService {
    constructor(
        @InjectModel(Survey.name) private readonly surveyModel: Model<Survey>,
    ) { }

    async createSurvey(survey) {
        const surveyData: Survey =  new this.surveyModel(survey);
        return this.surveyModel.insertMany([surveyData]);
    }

    async getAllSurvey() {
        return this.surveyModel.find();
    }

    async getSurvey(id) {
        return this.surveyModel.findById(id);
    }

    async updateSurvey(id: string, data) {
        return this.surveyModel.findByIdAndUpdate(id, data, {new: true});
    }
}