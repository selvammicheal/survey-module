import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './schemas/question.schema';
import { ObjectId } from 'mongodb';
import { QuestionTypeService } from 'src/QuestionType/questionType.service';
import { QUESTION_DATA } from './questionEnum';

@Injectable()
export class QuestionService {
    constructor(
        @InjectModel(Question.name) private readonly questionModel: Model<Question>,
        private readonly questionTypeService: QuestionTypeService,
    ) { }

    async createQuestion(question) {
        question["question_data"] = QUESTION_DATA[question.question_type_id]
        const questionData = new this.questionModel(question);
        return questionData.save();
    }

    async getQuestionsBySurvey(id: ObjectId) {
        if(!ObjectId.isValid(id)){
            throw new Error("Object Id is invalid")
        }
        return await this.questionModel.find({ survey_id: id })

    }

    async updateQuestion(id: ObjectId, data) {
        if(!ObjectId.isValid(id)){
            throw new Error("Object Id is invalid")
        }
        return this.questionModel.findByIdAndUpdate(id, data, { new: true })
    }

    async updateQuestionType(id: ObjectId, questionTypeId: string) {
        console.log(questionTypeId,"DDDD")
        if(!ObjectId.isValid(id)){
            throw new Error("Object Id is invalid")
        }
        console.log(QUESTION_DATA[questionTypeId],"QUESTION_DATA[questionTypeId]")
        // const questionTypeData = await this.questionTypeService.getQuestionType(questionTypeId);
        // console.log(questionTypeData,"questionTypeData")
        return this.questionModel.findByIdAndUpdate(id, {question_type_id: questionTypeId, question_data: QUESTION_DATA[questionTypeId].options}, { new: true })
    }
}
