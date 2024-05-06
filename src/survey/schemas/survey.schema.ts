import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({timestamps: true})

export class Survey {
   @Prop({default: "Untitled form"})
   name: string;

   @Prop({default: "Form description"})
   description: string;

   @Prop()
   ownerId: string;
   
}

export const SurveySchema = SchemaFactory.createForClass(Survey);  