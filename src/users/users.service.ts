// users.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable, UseInterceptors } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { LoggingInterceptor } from 'src/utils/logging.interceptor';

@Injectable()
@UseInterceptors(LoggingInterceptor)
export class UsersService {
  constructor(private readonly httpService: HttpService) { }

  getUsers() {
    return this.httpService.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((response) => response.data.map(({ id, name, email, company }) => ({ id, name, email, companyName: company.name }))),
    );
  }
}