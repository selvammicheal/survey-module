import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({timestamps: true})

export class Survey {
   @Prop({default: "Untitled form"})
   name: string;

   @Prop()
   description: string;

   @Prop({default: true})
   isActive: boolean;

   @Prop({default: "survey"})
   surveyType: string;

   @Prop({required: true})
   surveyMode: string;

}

export const SurveySchema = SchemaFactory.createForClass(Survey);  