import {Controller,Body,Patch,Param, ValidationPipe} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SurveyService } from './survey.service';
import { createSurveyDto } from './dto/createSurveyDto.dto';

@Controller('survey')
export class SurveyController {
  constructor(
    private readonly surveyService: SurveyService, 
  ) {}
  
  @MessagePattern({ cmd: 'create_survey' })
  async createSurvey(@Payload() data): Promise<any> {
    return await this.surveyService.createSurvey(data.data);
  }

  @MessagePattern({ cmd: 'get_survey' })
  async getSurvey(): Promise<any[]> {
    return await this.surveyService.getSurvey()
  }

  @MessagePattern({ cmd: 'update_survey' })
  async updateSurvey(@Payload() data): Promise<any> {
    console.log(data.id, data.data)
    return await this.surveyService.updateSurvey(data.id, data.data);
  }
}