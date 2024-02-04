import { Controller, Post, Body, Logger } from '@nestjs/common';
import { NewPostDto } from './dto/new-post.dto';
import { NewPostService } from './new-post.service';
import { ExecutionTime, LogExecutionTime } from 'src/utils/execution-time.decorator';

@LogExecutionTime()
@Controller('new-post')
export class NewPostController {
    constructor(private readonly newPostService: NewPostService) { }

    @Post()
    async createNewPost(
        @ExecutionTime() executionTime: { start: number }, @Body() newPostDto: NewPostDto) {
        const duration = performance.now() - executionTime.start;
        const newPost = await this.newPostService.createNewPost(newPostDto);
        Logger.log(`Execution time for getUserPosts: ${duration}ms`, 'PostsController');
        return newPost;
    }
}

