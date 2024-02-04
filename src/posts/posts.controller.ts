import { Controller, Get, Logger, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ExecutionTime, LogExecutionTime } from 'src/utils/execution-time.decorator';

@LogExecutionTime()
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Get(':userId')
  async getUserPosts(
    @Param('userId') userId: string,
    @ExecutionTime() executionTime: { start: number },
  ) {
    const userPosts = await this.postsService.getUserPosts(userId);
    const duration = performance.now() - executionTime.start;
    Logger.log(`Execution time for getUserPosts: ${duration}ms`, 'PostsController');
    return userPosts;
  }
}
