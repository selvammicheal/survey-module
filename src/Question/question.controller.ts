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
        try {
            return await this.questionService.createQuestion(data);
        } catch (err) {
            return err;
        }
    }

    @MessagePattern({ cmd: "get_questions_by_survey" })
    async getQuestionsBySurvey(@Payload() id: ObjectId): Promise<any> {
        try {
            return await this.questionService.getQuestionsBySurvey(id);
        } catch (err) {
            return err;
        }
    }

    @MessagePattern({ cmd: "update_question" })
    async updateQuestion(@Payload() {id, data}): Promise<any> {
        try {
            return await this.questionService.updateQuestion(id, data);
        } catch (err) {
            return err;
        }
    }

    @MessagePattern({ cmd: "update_question_type" })
    async updateQuestionType(@Payload() {id, value}): Promise<any> {
        try {
            return await this.questionService.updateQuestionType(id, value);
        } catch (err) {
            return err;
        }
    }

    @MessagePattern({ cmd: "delete_question" })
    async deleteQuestion(@Payload() id): Promise<any> {
        try {
            return await this.questionService.deleteQuestion(id);
        } catch (err) {
            return err;
        }
    }
}
