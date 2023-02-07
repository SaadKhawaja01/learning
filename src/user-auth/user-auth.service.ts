import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { IsignUp } from './user-auth.dto';
import { User } from './user-auth.entity';
import * as bcrypt from 'bcrypt';
import { Signup } from './user-auth.model';

@Injectable()
export class UserAuthService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async signUp(data: Signup) {
    const saltOrRounds = 10;
    const encrypted =bcrypt.hashSync(data.password, saltOrRounds);
    const otp = Math.floor(100000 + Math.random() * 900000);

    const user = this.userRepo.create({
        username: data.username,
        email:data.email,
        password: encrypted,
        otp: otp
    })
    
    await this.userRepo.save(user)



    // const newUser = this.userRepo.save();
    return otp;
  }
}
