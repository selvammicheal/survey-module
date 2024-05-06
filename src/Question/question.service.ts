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
        const questionData: any =  new this.questionModel(question)
        return this.questionModel.insertMany([questionData])
    }

    async getQuestion(): Promise<Question[]> {
        return this.questionModel.find()
    }

    // async updateSurvey(id: string, data) {
    //     return this.questionModel.findByIdAndUpdate(id, data)
    // }
}
