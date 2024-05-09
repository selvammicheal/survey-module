import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose from "mongoose";

@Schema({timestamps: true})

export class Section {
   @Prop({ type: mongoose.Schema.ObjectId, ref: 'Survey', required: true })
   survey_id: string;

   @Prop()
   name: string;

   @Prop({default: "Survey description"})
   description: string;
   
}  

export const SectionSchema = SchemaFactory.createForClass(Section);  