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
  async createSurvey(@Payload() message): Promise<any> {
    return await this.surveyService.createSurvey(message.data);
  }

  @MessagePattern({ cmd: 'get_survey' })
  async getSurvey(): Promise<any[]> {
    return await this.surveyService.getSurvey()
  }
}