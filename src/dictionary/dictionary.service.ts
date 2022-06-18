import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DictionaryService {
  constructor(private readonly httpService: HttpService) {}
  find(word: string) {
    const response = this.httpService
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .pipe(
        map((response) => response.data),
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
      );
    return response;
  }
}
