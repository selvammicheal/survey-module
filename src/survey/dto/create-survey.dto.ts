import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class createSurveyDto {
    // @IsNotEmpty({message: "Please enter a name"})
    @IsString({message: "Name should be a string"})
    @IsOptional()
    name: string

    // @IsNotEmpty({message: "Please enter a description"})
    @IsString({message: "Description should be string"})
    @IsOptional()
    description: string
}