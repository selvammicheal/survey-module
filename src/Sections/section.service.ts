import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Section } from './schemas/section.schema';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

@Injectable()
export class SectionService {
    constructor(
        @InjectModel(Section.name) private readonly sectionModel: Model<Section>,
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
}