import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { NewPostModule } from './new-post/new-post.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './utils/logging.interceptor';

@Module({
  imports: [UsersModule, PostsModule, NewPostModule],
  controllers: [AppController],
  providers: [AppService,
  ]
})
export class AppModule { }
