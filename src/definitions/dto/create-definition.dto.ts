import { IsString } from 'class-validator';

export class CreateDefinitionDto {
  @IsString()
  word: string;

  @IsString()
  definition: string;

  // @IsString()
  // phonetic: string;

  // @IsString()
  // audio: string;

  // @IsString()
  // partOfSpeech: string;

  // @IsString()
  // example: string;
}
