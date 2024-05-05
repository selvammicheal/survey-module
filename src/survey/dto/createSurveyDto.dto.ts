import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createSurveyDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty({message: "Please enter a description"})
    @IsString()
    description: string

    @IsNotEmpty()
    @IsString()
    ownerId: string
}