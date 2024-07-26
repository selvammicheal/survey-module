import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";
import { SurveyResponse } from "./schemas/surveyResponse.schema";

@Injectable()
export class SurveyResponseService {
    constructor(
        @InjectModel(SurveyResponse.name) private readonly surveyResponseModel: Model<SurveyResponse>,
    ) { }

    async submitResponseBySurvey(responses) {
        return await this.surveyResponseModel.insertMany(responses);
    }

    async getSurveyResponse(id: ObjectId, email: string) {
        if (!ObjectId.isValid(id)) {
            return {
                error: true,
                reason: "Object Id is invalid"
            }
        }

        const responseData = await this.surveyResponseModel.find({
            survey_id: id,
            user_email: email
        });

        return responseData;
    }

    async getSurveyResponsesBySurvey(id: ObjectId) {
        if (!ObjectId.isValid(id)) {
            return {
                error: true,
                reason: "Object Id is invalid"
            }
        }

        const responseData = await this.surveyResponseModel.find({
            survey_id: id
        });

        if (responseData.length <= 0) {
            return responseData;
        }

        const aggregationPipeline = [
            {
                $match: {
                    survey_id: new ObjectId(id)
                }
            },
            {
                $group: {
                    _id: "$survey_id",
                    user_emails: {
                        $addToSet: "$user_email"
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    survey_id: "$_id",
                    user_emails: 1
                }
            }
        ];
        return await this.surveyResponseModel.aggregate(aggregationPipeline);
    }
}