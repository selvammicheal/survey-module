import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './schemas/question.schema';
import { ObjectId } from 'mongodb';
import { QuestionTypeService } from 'src/QuestionType/questionType.service';
import { QUESTION_DATA } from './enum/questionEnum';

@Injectable()
export class QuestionService {
    constructor(
        @InjectModel(Question.name) private readonly questionModel: Model<Question>,
    ) { }

    async createQuestion(question) {
        console.log(question)
        question["question_data"] = QUESTION_DATA[question.question_type_id].questionData
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
        if(data?.question == null){
            data.question = "Untitled Question"
        }
        return this.questionModel.findByIdAndUpdate(id, data, { new: true })
    }

    async updateQuestionType(id: ObjectId, questionTypeId: string) {
        if(!ObjectId.isValid(id)){
            throw new Error("Object Id is invalid")
        }
        return this.questionModel.findByIdAndUpdate(id, {question_type_id: questionTypeId, question_data: QUESTION_DATA[questionTypeId].questionData}, { new: true })
    }

    async deleteQuestion(id: string): Promise<{ message: string }> {
        const result = await this.questionModel.findByIdAndDelete(id);
        if (!result) {
          throw new NotFoundException(`Question with ID ${id} not found`);
        }
        return { message: 'Question deleted successfully' };
      }
}
