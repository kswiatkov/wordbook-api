import { Controller, Post, Body, Get } from '@nestjs/common';
import { DefinitionsService } from './definitions.service';
import { CreateDefinitionDto } from './dto/create-definition.dto';

@Controller('definitions')
export class DefinitionsController {
  constructor(private readonly definitionsService: DefinitionsService) {}

  @Post()
  create(@Body() body: CreateDefinitionDto) {
    return this.definitionsService.create(body);
  }

  @Get()
  findAll() {
    return this.definitionsService.findAll();
  }
}
