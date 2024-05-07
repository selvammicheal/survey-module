import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema({timestamps: true})

export class QuestionType {

   @Prop({default: "1"})
   type: string;

   @Prop()
   name: string
   
}

export const QuestionTypeSchema = SchemaFactory.createForClass(QuestionType);  