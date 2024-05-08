import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose from "mongoose";

@Schema({timestamps: true})

export class Question {
   @Prop({default: "Untitled form"})
   question: string;

   @Prop()
   question_type_id: string;

   @Prop()
   option: string;

   @Prop()
   @Prop({ type: mongoose.Schema.ObjectId, ref: 'Section', required: true })
   section_id: string;

   @Prop()
   survey_id: string;

   @Prop()
   mandatory: string;
   
}

export const QuestionSchema = SchemaFactory.createForClass(Question);  