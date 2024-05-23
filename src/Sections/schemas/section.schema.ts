import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose from "mongoose";

@Schema({timestamps: true})

export class Section {
   @Prop({ type: mongoose.Schema.ObjectId, ref: 'Survey', required: true })
   survey_id: string;

   @Prop()
   name: string;

   @Prop()
   description: string;

   @Prop({default: true})
   isActive: boolean;
   
}  

export const SectionSchema = SchemaFactory.createForClass(Section);  