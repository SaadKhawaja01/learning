import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsEmail } from 'class-validator';
import { IsignUp } from './user-auth.dto';

export class Signup implements IsignUp {
  @ApiProperty( {default: 'Umar'})
  @IsNotEmpty()
  @IsString()

  username: string;
  @ApiProperty({default: 'Umar@gmail.com'})
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty({default: 'Password'})
  @IsNotEmpty()
  @IsString()
  password: string;
}
