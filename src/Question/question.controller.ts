import { Controller } from '@nestjs/common';
import { QuestionService } from './question.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('question')
export class QuestionController {
    constructor(
        private readonly questionService: QuestionService,
    ) { }

    @MessagePattern({ cmd: 'create_question' })
    async createQuestion(@Payload() data): Promise<any> {
        console.log("Insoide", data)
        return  await this.questionService.createQuestion(data);
    }

    @MessagePattern({ cmd: "get_questions_by_survey" })  
    async getQuestionsBySurvey(@Payload() id): Promise<any> {
        return await this.questionService.getQuestionsBySurvey(id);
    }

    @MessagePattern({ cmd: "update_question" })  
    async updateQuestion(@Payload() data): Promise<any> {
        return await this.questionService.updateQuestion(data.id, data.data); 
    }
}
