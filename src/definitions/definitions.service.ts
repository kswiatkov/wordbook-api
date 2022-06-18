import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Definition } from './definition.entity';
import { CreateDefinitionDto } from './dto/create-definition.dto';

@Injectable()
export class DefinitionsService {
  constructor(
    @InjectRepository(Definition) private repo: Repository<Definition>,
  ) {}

  create(createDefinitionDto: CreateDefinitionDto) {
    const definition = this.repo.create(createDefinitionDto);
    return this.repo.save(definition);
  }

  findAll() {
    return this.repo.find();
  }
}
