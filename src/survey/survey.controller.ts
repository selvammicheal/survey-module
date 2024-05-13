import { Controller, Body, Patch, Param, ValidationPipe, Res } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SurveyService } from './survey.service';
import { createSurveyDto } from './dto/createSurveyDto.dto';
import { Survey } from './schemas/survey.schema';
import { ObjectId } from 'mongodb';

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
    async getSurvey(@Payload() id: ObjectId): Promise<any> {
        try{
            console.log(id,"id")
            return await this.surveyService.getSurvey(id);
        } catch (error){
            console.log(error,"error")
            if(error.kind === "ObjectId"){
               
                return {error: 'Error in the Object Id'}
            }
            return error.response;
        }
        
    }

    @MessagePattern({ cmd: 'update_survey' })
    async updateSurvey(@Payload() data): Promise<Survey> {
        return await this.surveyService.updateSurvey(data.id, data.data);
    }
}