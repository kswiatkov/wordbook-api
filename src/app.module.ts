import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefinitionsModule } from './definitions/definitions.module';
import { Definition } from './definitions/definition.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Definition],
      synchronize: true,
    }),
    DefinitionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
