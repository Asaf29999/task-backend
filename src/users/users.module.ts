import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from 'src/utils/logging.interceptor';

@Module({
    imports: [HttpModule],
    controllers: [UsersController],
    providers: [UsersService,
        // {
        //     provide: APP_INTERCEPTOR,
        //     useClass: LoggingInterceptor,
        // }
    ],
})
export class UsersModule { }