import { Controller, Get } from '@nestjs/common';
import { User } from './user.service';

// User
@Controller('user')
export class UserController {
constructor(private user: User){


}
@Get("/")
Login(){
return this.user.Login()

}



}
