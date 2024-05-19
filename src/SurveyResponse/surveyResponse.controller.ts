import { Controller } from '@nestjs/common';
import { SurveyResponseService } from './sueveyResponse.service';
import { MessagePattern, Payload } from '@nestjs/microservices';


@Controller()
export class SurveyResponseController {
    constructor(
        private readonly surveyResponseService: SurveyResponseService,
    ) { }

    @MessagePattern({ cmd: 'submit_response_by_survey' })
    async submitResponseBySurvey(@Payload() data): Promise<any> {
        console.log("Inside")
        return await this.surveyResponseService.submitResponseBySurvey(data);
    }

    @MessagePattern({ cmd: "get_all_question_type" })
    async getAllQuestionType(): Promise<any> {
        return await this.surveyResponseService.getAllQuestionType();
    }

    @MessagePattern({ cmd: "get_question_type" })
    async getQuestionType(@Payload() id): Promise<any> {
        return await this.surveyResponseService.getQuestionType(id);
    }

}