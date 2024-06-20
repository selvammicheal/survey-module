import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Section } from './schemas/section.schema';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { QuestionTypeService } from 'src/QuestionType/questionType.service';
import { Question } from 'src/question/schemas/question.schema';

@Injectable()
export class SectionService {
    constructor(
        @InjectModel(Section.name) private readonly sectionModel: Model<Section>,
        @InjectModel(Question.name) private readonly questionModel: Model<Question>,
    ) { }

    async createSection(section) {
        const sectionData =  new this.sectionModel(section);
        return sectionData.save();
    }

    async getAllSectionsBySurvey(id: ObjectId) {
        if(!ObjectId.isValid(id)){
            throw new HttpException("Object Id is invalid", HttpStatus.BAD_REQUEST)
        }

        const sectionsData = await this.sectionModel.find({survey_id:id});
        if (sectionsData.length === 0) {
            throw new NotFoundException('Sections Not Found');
            // throw new NotFoundException('Sections not found!');
        }

        return sectionsData;
    }
    
    async updateSection(id: ObjectId, data) {
        if(!ObjectId.isValid(id)){
            throw new Error("Object Id is invalid")
        }
        console.log(data)
        if(data?.name === null){
            data.name = "Untitled Section"
        }
        return this.sectionModel.findByIdAndUpdate(id, data, { new: true })
    }

    async deleteSection(id: string): Promise<{ message: string }> {
        await this.questionModel.updateMany({section_id: id}, {isActive: false});
        const result = await this.sectionModel.findByIdAndUpdate(id, {isActive: false});
        if (!result) {
          throw new NotFoundException(`Section with ID ${id} not found`);
        }
        return { message: 'Section deleted successfully' };
      }
}