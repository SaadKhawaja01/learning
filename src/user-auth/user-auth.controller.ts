import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IsignUp } from './user-auth.dto';
import { Signup } from './user-auth.model';
import { UserAuthService } from './user-auth.service';

@ApiTags('User-Auth')
@Controller('user-auth')
export class UserAuthController {
  constructor(private readonly userService: UserAuthService) {}

  //sigup
  @UsePipes(ValidationPipe)
  @Post()
  signUp(@Body() data: Signup) {
    return this.userService.signUp(data);
  }

  // email verfication

  //login
  //forget password
  //reset password
}
