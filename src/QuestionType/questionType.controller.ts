import { Controller } from '@nestjs/common';
import { QuestionTypeService } from './questionType.service';
import { MessagePattern, Payload } from '@nestjs/microservices';


@Controller('questionType')
export class QuestionTypeController {
    constructor(
        private readonly questionTypeService : QuestionTypeService,
    ){}

    @MessagePattern({ cmd: 'create_question_type'})
    async createQuestionType(@Payload() data): Promise<any> {
        return await this.questionTypeService.createQuestionType(data);
    }
    
}