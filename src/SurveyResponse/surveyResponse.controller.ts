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

}