import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Survey } from './schemas/survey.schema';
import { Model } from 'mongoose';
import { Section } from 'src/Sections/schemas/section.schema';
import { SectionService } from 'src/Sections/section.service';
import { QuestionService } from 'src/question/question.service';
import { QuestionTypeService } from 'src/QuestionType/questionType.service';
import { ObjectId } from 'mongodb';
import { createSurveyDto } from './dto/create-survey.dto';

@Injectable()
export class SurveyService {
    constructor(
        @InjectModel(Survey.name) private readonly surveyModel: Model<Survey>,
        private readonly sectionService: SectionService,
        private readonly questionService: QuestionService,
        private readonly questionTypeService: QuestionTypeService,
    ) { }

    async createSurvey(survey: createSurveyDto) {
        const surveyData = new this.surveyModel(survey);
        const surveyResponse = await surveyData.save();

        //creating a section
        const section = {
            survey_id: surveyResponse._id,
            name: null,
            description: null,
            isActive: true,
            isLinked: false
        }
        const sectionResponse = await this.sectionService.createSection(section);

        console.log(sectionResponse,"sectionResponse")

        const questionType = await this.questionTypeService.getAllQuestionType();

        //creating a section
        const question = {
            question_type_id: questionType[0]._id,
            question_img_src: "",
            option: null,
            section_id: sectionResponse._id,
            survey_id: surveyResponse._id,
            mandatory: false,
            isActive: true
        }
        await this.questionService.createQuestion(question);

        return surveyResponse;
    }

    async getAllSurvey(type: string) {
        return await this.surveyModel.find({
            surveyType: type
        });
    }

    async getSurveyName(id: ObjectId) {
        const survey = await this.surveyModel.findById(id);
        if (survey) {
            return {survey_name: survey.name};
        } else {
            return null;
        }
    }

    async getSurvey(id: ObjectId) {
        if (!ObjectId.isValid(id)) {
            throw new Error("Object Id is invalid")
        }

        const surveyData = await this.surveyModel.findById(id);
        if (!surveyData) {
            throw new NotFoundException('Survey not found!');
        }

        const aggregationPipeline = [
            {
                $match: { _id: new ObjectId(id) },
            },
            {
                $lookup: {
                    from: "sections",
                    localField: "_id",
                    foreignField: "survey_id",
                    as: "sectionsData"
                }
            },
            {
                $unwind: "$sectionsData"
            },
            {
                $match: { "sectionsData.isActive": true }
            },
            {
                $lookup: {
                    from: "questions",
                    localField: "sectionsData._id",
                    foreignField: "section_id",
                    as: "questions"
                }
            },
            {
                $group: {
                    _id: "$_id",
                    name: { $first: "$name" },
                    description: { $first: "$description" },
                    surveyType: { $first: "$surveyType" },
                    surveyMode: { $first: "$surveyMode" },
                    sections: {
                        $push: {
                            _id: "$sectionsData._id",
                            name: "$sectionsData.name",
                            description: "$sectionsData.description",
                            isActive: "$sectionsData.isActive",
                            isLinked: "$sectionsData.isLinked",
                            questions: {
                                $filter: {
                                    input: "$questions",
                                    as: "question",
                                    cond: { $eq: ["$$question.isActive", true] }
                                }
                            }
                        }
                    }
                }
            }
        ];
        return await this.surveyModel.aggregate(aggregationPipeline);
        // return this.surveyModel.findById(id);
    }

    async updateSurvey(id: ObjectId, data) {
        if (!ObjectId.isValid(id)) {
            throw new Error("Object Id is invalid")
        }

        const surveyData = await this.surveyModel.findById(id);
        if (!surveyData) {
            throw new NotFoundException('Survey not found!');
        }

        if (data?.name === null) {
            data.name = "Untitled form"
        }

        return this.surveyModel.findByIdAndUpdate(id, data, { new: true });
    }
}