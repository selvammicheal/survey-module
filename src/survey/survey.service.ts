import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Survey } from './schemas/survey.schema';
import { Model } from 'mongoose';
import { createSurveyDto } from './dto/createSurveyDto.dto';

@Injectable()
export class SurveyService {
    constructor(
        @InjectModel(Survey.name) private readonly surveyModel: Model<Survey>,
    ) { }

    async createSurvey(survey) {
        const surveyData: any =  new this.surveyModel(survey)
        return this.surveyModel.insertMany([surveyData])
    }

    async getSurvey(): Promise<Survey[]> {
        return this.surveyModel.find()
    }

    async updateSurvey(id: string, data) {
        return this.surveyModel.findByIdAndUpdate(id, data)
    }

}