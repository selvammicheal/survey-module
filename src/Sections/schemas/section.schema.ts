import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({timestamps: true})

export class Section {
   @Prop()
   survey_id: string;

   @Prop()
   name: string;

   @Prop({default: "Survey description"})
   description: string;
   
}  

export const SectionSchema = SchemaFactory.createForClass(Section);  