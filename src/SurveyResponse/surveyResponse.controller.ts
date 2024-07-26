import { Controller } from '@nestjs/common';
import { SurveyResponseService } from './surveyResponse.service';
import { MessagePattern, Payload } from '@nestjs/microservices';


@Controller()
export class SurveyResponseController {
    constructor(
        private readonly surveyResponseService: SurveyResponseService,
    ) { }

    @MessagePattern({ cmd: 'submit_response_by_survey' })
    async submitResponseBySurvey(@Payload() data): Promise<any> {
        return await this.surveyResponseService.submitResponseBySurvey(data);
    }

    @MessagePattern({ cmd: 'get_survey_responses_by_survey' })
    async getSurveyResponsesBySurvey(@Payload() id): Promise<any> {
        return await this.surveyResponseService.getSurveyResponsesBySurvey(id);
    }

    @MessagePattern({ cmd: 'get_survey_response' })
    async getSurveyResponse(@Payload() { surveyId, email }): Promise<any> {
        return await this.surveyResponseService.getSurveyResponse(surveyId, email);
    }

}