import { Controller, Body, Patch, Param, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SurveyService } from './survey.service';
import { createSurveyDto } from './dto/createSurveyDto.dto';
import { Survey } from './schemas/survey.schema';

@Controller()
export class SurveyController {
    constructor(
        private readonly surveyService: SurveyService,
    ) { }

    @MessagePattern({ cmd: 'create_survey' })
    async createSurvey(@Payload() data): Promise<any> {
        return await this.surveyService.createSurvey(data);
    }

    @MessagePattern({ cmd: 'get_all_survey' })
    async getAllSurvey(): Promise<Survey[]> {
        return await this.surveyService.getAllSurvey();
    }

    @MessagePattern({ cmd: 'get_survey' })
    async getSurvey(@Payload() id): Promise<any> {
        return await this.surveyService.getSurvey(id);
    }

    @MessagePattern({ cmd: 'update_survey' })
    async updateSurvey(@Payload() data): Promise<Survey> {
        return await this.surveyService.updateSurvey(data.id, data.data);
    }
}