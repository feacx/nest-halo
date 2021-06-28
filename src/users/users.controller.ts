import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  index(): string {
    return 'Hello Oho!';
  }

  @Get('/profile')
  profile(): string {
    return 'Hello Profile!';
  }
}
