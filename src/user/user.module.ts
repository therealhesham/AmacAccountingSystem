import { Module } from '@nestjs/common';
import { User } from './user.service';
import { UserController } from './user.controller';

@Module({
  providers: [User],
  controllers: [UserController]
})
export class UserModule {
constructor(){

}


}
