import { Controller } from '@nestjs/common';
import { QuestionTypeService } from './questionType.service';
import { MessagePattern, Payload } from '@nestjs/microservices';


@Controller()
export class QuestionTypeController {
    constructor(
        private readonly questionTypeService: QuestionTypeService,
    ) { }

    @MessagePattern({ cmd: 'create_question_type' })
    async createQuestionType(@Payload() data): Promise<any> {
        return await this.questionTypeService.createQuestionType(data);
    }

    @MessagePattern({ cmd: "get_all_question_type" })
    async getAllQuestionType(): Promise<any> {
        console.log("INSIDE")
        return await this.questionTypeService.getAllQuestionType();
    }

    @MessagePattern({ cmd: "get_question_type" })
    async getQuestionType(@Payload() id): Promise<any> {
        return await this.questionTypeService.getQuestionType(id);
    }

}