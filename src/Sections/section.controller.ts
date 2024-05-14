import { Controller, Body, Patch, Param, ValidationPipe, UseFilters } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SectionService } from './section.service';
import { Section } from './schemas/section.schema';
import { ObjectId } from 'mongodb';

@Controller()
export class SectionController {
    constructor(
        private readonly sectionService: SectionService,
    ) { }

    @MessagePattern({ cmd: 'create_section' })
    async createSection(@Payload() data): Promise<any> {
        try {
            return await this.sectionService.createSection(data);
        } catch (err) {
            return err;
        }
    }

    @MessagePattern({ cmd: 'get_all_sections' })
    async getAllSectionsBySurvey(@Payload() id: ObjectId): Promise<any> {
        return await this.sectionService.getAllSectionsBySurvey(id);
    }
}