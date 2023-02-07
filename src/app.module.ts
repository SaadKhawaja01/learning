import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user-auth/user-auth.entity';
import { UserAuthModule } from './user-auth/user-auth.module';


const DB =  TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'sample_db',
  entities: [User],
  synchronize: true,
})


@Module({
  imports: [DB ,UserAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
