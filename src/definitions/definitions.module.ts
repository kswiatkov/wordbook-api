import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefinitionsController } from './definitions.controller';
import { DefinitionsService } from './definitions.service';
import { Definition } from './definition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Definition])],
  controllers: [DefinitionsController],
  providers: [DefinitionsService],
})
export class DefinitionsModule {}
