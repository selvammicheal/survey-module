import { Controller, Body, Patch, Param, ValidationPipe, Res, UsePipes, UseFilters } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SurveyService } from './survey.service';
import { Survey } from './schemas/survey.schema';
import { ObjectId } from 'mongodb';
import { createSurveyDto } from './dto/create-survey.dto';
import { CustomExceptionFilter } from 'src/error-handling.filter';

@Controller()
// @UseFilters(new CustomExceptionFilter())
export class SurveyController {
    constructor(
        private readonly surveyService: SurveyService,
    ) { }

    @MessagePattern({ cmd: 'create_survey' })
    @UsePipes(new ValidationPipe())
    async createSurvey(@Body() data: createSurveyDto): Promise<any> {
        return await this.surveyService.createSurvey(data);
    }

    @MessagePattern({ cmd: 'get_all_survey' })
    async getAllSurvey(@Payload() type: string): Promise<any> {
        return await this.surveyService.getAllSurvey(type);
    }

    @MessagePattern({ cmd: 'get_survey' })
    async getSurvey(@Payload() id: ObjectId): Promise<any> {
        return await this.surveyService.getSurvey(id);
    }

    @MessagePattern({ cmd: 'update_survey' })
    async updateSurvey(@Payload() { id, data }): Promise<Survey> {
        return await this.surveyService.updateSurvey(id, data);
    }

    @MessagePattern({ cmd: 'get_survey-name' })
    async getSurveyName(@Payload() id: ObjectId): Promise<any> {
        return await this.surveyService.getSurveyName(id);
    }
}