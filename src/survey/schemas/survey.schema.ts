import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({timestamps: true})

export class Survey {
   @Prop()
   name: string;

   @Prop()
   description: string;

   @Prop()
   ownerId: string;
   
}  

export const SurveySchema = SchemaFactory.createForClass(Survey);  