import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Section } from './schemas/section.schema';
import { Model } from 'mongoose';

@Injectable()
export class SectionService {
    constructor(
        @InjectModel(Section.name) private readonly sectionModel: Model<Section>,
    ) { }

    async createSection(section) {
        const sectionData: Section =  new this.sectionModel(section);
        return this.sectionModel.insertMany([sectionData]);
    }

    async getAllSections() {
        return this.sectionModel.find();
    }

    // async getSurvey(id) {
    //     return this.surveyModel.findById(id);
    // }

    // async updateSurvey(id: string, data) {
    //     return this.surveyModel.findByIdAndUpdate(id, data, {new: true});
    // }
}