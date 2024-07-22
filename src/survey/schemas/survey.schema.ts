import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({timestamps: true})

export class Survey {
   @Prop({default: "Untitled form"})
   name: string;

   @Prop()
   description: string;

   @Prop({default: true})
   isActive: boolean;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);  