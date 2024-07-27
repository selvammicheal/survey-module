import { Controller } from '@nestjs/common';
import { QuestionService } from './question.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ObjectId } from 'mongodb';

@Controller('question')
export class QuestionController {
    constructor(
        private readonly questionService: QuestionService,
    ) { }

    @MessagePattern({ cmd: 'create_question' })
    async createQuestion(@Payload() data): Promise<any> {
        return await this.questionService.createQuestion(data);
    }

    @MessagePattern({ cmd: "get_questions_by_survey" })
    async getQuestionsBySurvey(@Payload() id: ObjectId): Promise<any> {
        return await this.questionService.getQuestionsBySurvey(id);
    }

    @MessagePattern({ cmd: "update_question" })
    async updateQuestion(@Payload() {id, data}): Promise<any> {
        return await this.questionService.updateQuestion(id, data);
    }

    @MessagePattern({ cmd: "update_question_type" })
    async updateQuestionType(@Payload() {id, data}): Promise<any> {
        return await this.questionService.updateQuestionType(id, data);
    }

    @MessagePattern({ cmd: "delete_question" })
    async deleteQuestion(@Payload() id): Promise<any> {
        return await this.questionService.deleteQuestion(id);
    }
}
