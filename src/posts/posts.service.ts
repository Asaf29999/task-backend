import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {
  constructor(private readonly httpService: HttpService) { }

  getUserPosts(userId: string) {

    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    return this.httpService
      .get(url)
      .pipe(map((response) => response.data));
  }
}
