import { Controller, Body, Patch, Param, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SectionService } from './section.service';
import { Section } from './schemas/section.schema';

@Controller()
export class SectionController {
    constructor(
        private readonly sectionService: SectionService,
    ) { }

    @MessagePattern({ cmd: 'create_section' })
    async createSection(@Payload() data): Promise<any> {
        return await this.sectionService.createSection(data);
    }

    @MessagePattern({ cmd: 'get_all_sections' })
    async getAllSections(@Payload() id): Promise<Section[]> {
        return await this.sectionService.getAllSections(id);
    }

    // @MessagePattern({ cmd: 'get_survey' })
    // async getSurvey(@Payload() id): Promise<Survey> {
    //     return await this.surveyService.getSurvey(id);
    // }

    // @MessagePattern({ cmd: 'update_survey' })
    // async updateSurvey(@Payload() data): Promise<Survey> {
    //     return await this.surveyService.updateSurvey(data.id, data.data);
    // }
}