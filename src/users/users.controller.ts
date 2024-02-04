import { Controller, Get, Logger, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { ExecutionTime, LogExecutionTime } from 'src/utils/execution-time.decorator';
import { LoggingInterceptor } from 'src/utils/logging.interceptor';

@LogExecutionTime()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // @UseInterceptors(LoggingInterceptor)
  @Get()
  async getUsers(@ExecutionTime() executionTime: { start: number }) {
    const users = await this.usersService.getUsers();
    const duration = performance.now() - executionTime.start;
    Logger.log(`Execution time for getUsers: ${duration}ms`, 'UsersController');
    return users;
  }
}