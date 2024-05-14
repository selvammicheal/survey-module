import { Controller, Body, Patch, Param, ValidationPipe, Res } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SurveyService } from './survey.service';
import { Survey } from './schemas/survey.schema';
import { ObjectId } from 'mongodb';

@Controller()
export class SurveyController {
    constructor(
        private readonly surveyService: SurveyService,
    ) { }

    @MessagePattern({ cmd: 'create_survey' })
    async createSurvey(@Payload() data): Promise<any> {
        try {
            return await this.surveyService.createSurvey(data);
        } catch (err) {
            return err;
        }
    }

    @MessagePattern({ cmd: 'get_all_survey' })
    async getAllSurvey(): Promise<any> {
        try {
            return await this.surveyService.getAllSurvey();
        } catch (err) {
            return err;
        }
    }

    @MessagePattern({ cmd: 'get_survey' })
    async getSurvey(@Payload() id: ObjectId): Promise<any> {
        try {
            return await this.surveyService.getSurvey(id);
        } catch (err) {
            return err;
        }
    }

    @MessagePattern({ cmd: 'update_survey' })
    async updateSurvey(@Payload() {id, data}): Promise<Survey> {
        try {
            return await this.surveyService.updateSurvey(id, data);
        } catch (err) {
            return err;
        }
    }
}