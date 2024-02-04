import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NewPostController } from './new-post.controller';
import { NewPostService } from './new-post.service';

@Module({
  imports: [HttpModule],
  controllers: [NewPostController],
  providers: [NewPostService],
})
export class NewPostModule {}