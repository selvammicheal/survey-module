import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './schemas/question.schema';
import { ObjectId } from 'mongodb';

@Injectable()
export class QuestionService {
    constructor(
        @InjectModel(Question.name) private readonly questionModel: Model<Question>,
    ) { }

    async createQuestion(question) {
        const questionData = new this.questionModel(question);
        return questionData.save();
    }

    async getQuestionsBySurvey(id: string) {
        const aggregationPipeline = [
            {
                $match: { survey_id: new ObjectId(id) },

            },
            {
                $lookup: {
                    from: "questiontypes",
                    localField: "question_type_id",
                    foreignField: "_id",
                    as: "questionTypeDetails"
                }
            },
            {
                $unwind: "$questionTypeDetails"
            },
            {
                $group: {
                    _id: "$section_id",
                    questions: {
                        $push: "$$ROOT"
                    }
                }
            },
            {
                $lookup: {
                    from: "sections",
                    localField: "_id",
                    foreignField: "_id",
                    as: "sectionDetails"
                }
            },
            {
                $unwind: "$sectionDetails"
            }
        ]
        return await this.questionModel.aggregate(aggregationPipeline)

    }

    async updateQuestion(id: string, data) {
        return this.questionModel.findByIdAndUpdate(id, data, { new: true })
    }
}
