import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Section } from './schemas/section.schema';
import { Model } from 'mongoose';

@Injectable()
export class SectionService {
    constructor(
        @InjectModel(Section.name) private readonly sectionModel: Model<Section>,
    ) { }

    async createSection(section) {
        const sectionData =  new this.sectionModel(section);
        return sectionData.save();
    }

    async getAllSections(id) {
        return this.sectionModel.find({survey_id:id});
    }

    // async getSurvey(id) {
    //     return this.surveyModel.findById(id);
    // }

    // async updateSurvey(id: string, data) {
    //     return this.surveyModel.findByIdAndUpdate(id, data, {new: true});
    // }
}