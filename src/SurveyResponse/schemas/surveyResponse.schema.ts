import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose from "mongoose";

@Schema({timestamps: true})

export class SurveyResponse {

   @Prop({ type: mongoose.Schema.ObjectId, ref: 'Survey', required: true })
   survey_id: mongoose.Schema.Types.ObjectId;

   @Prop({ type: mongoose.Schema.ObjectId, ref: 'Section', required: true })
   section_id: mongoose.Schema.Types.ObjectId;

   @Prop({ type: mongoose.Schema.ObjectId, ref: 'Question', required: true })
   question_id: mongoose.Schema.Types.ObjectId;

   @Prop()
   user_email: string

   @Prop()
   question: string

   @Prop({ type: mongoose.Schema.Types.Mixed })
   question_response: string | string[] | null
   
}

export const SurveyResponseSchema = SchemaFactory.createForClass(SurveyResponse);  