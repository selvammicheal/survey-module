import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Survey } from "src/survey/schemas/survey.schema";

Schema({ timestamps: true })

export class Question {
    @Prop({ default: "Untitled Question" })
    question: string;

    @Prop()
    questionImg: string

    @Prop()
    question_type_id: string;

    @Prop()
    option: string;

    @Prop()
    section_id: string;

    @Prop({ type: mongoose.Schema.ObjectId, ref: "Survey", required: true })
    survey_id: Survey;

    @Prop()
    mandatory: boolean;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);