import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose from "mongoose";

@Schema({ timestamps: true })

export class Question {
   @Prop({ default: "Untitled Question" })
   question: string;

   @Prop({ type: mongoose.Schema.ObjectId, ref: 'QuestionType', required: true })
   question_type_id: mongoose.Schema.Types.ObjectId;

   @Prop()
   question_img_src: string

   @Prop()
   question_data: mongoose.Schema.Types.Mixed;

   @Prop({ type: mongoose.Schema.ObjectId, ref: 'Section', required: true })
   section_id: mongoose.Schema.Types.ObjectId;

   @Prop({ type: mongoose.Schema.ObjectId, ref: 'Survey', required: true })
   survey_id: mongoose.Schema.Types.ObjectId;

   @Prop()
   mandatory: boolean;

   @Prop({ default: true })
   isActive: boolean;

   @Prop({ default: 0 })
   points: number;

}

export const QuestionSchema = SchemaFactory.createForClass(Question);  