import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuthController } from './user-auth.controller';
import { User } from './user-auth.entity';
import { UserAuthService } from './user-auth.service';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserAuthController],
  providers: [UserAuthService]
})
export class UserAuthModule {}
