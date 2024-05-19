import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({timestamps: true})

export class Survey {
   @Prop({default: "Untitled form"})
   name: string;

   @Prop()
   description: string;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);  