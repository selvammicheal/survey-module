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
        return await this.questionService.createQuestion(data.data);
    }

    @MessagePattern({ cmd: 'get_question' })
    async getQuestion(): Promise<any[]> {
        return await this.questionService.getQuestion()
    }
}
