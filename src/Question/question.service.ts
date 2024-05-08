import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './schemas/question.schema';

@Injectable()
export class QuestionService {
    constructor(
        @InjectModel(Question.name) private readonly questionModel: Model<Question>,
    ) { }

    async createQuestion(question) {
        const questionData =  new this.questionModel(question);
        return questionData.save();
    }

    async getQuestionsBySection(id: string) {
        return this.questionModel.find({section_id: id});
    }

    async updateQuestion(id: string, data) {
        return this.questionModel.findByIdAndUpdate(id, data, {new: true})
    }
}
