import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefinitionsModule } from './definitions/definitions.module';
import { Definition } from './definitions/definition.entity';
import { DictionaryModule } from './dictionary/dictionary.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Definition],
      synchronize: true,
    }),
    DefinitionsModule,
    DictionaryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
