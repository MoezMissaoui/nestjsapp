import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/database/entities/user.entity';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get('/list')
    users(): Promise<User[]> {
        return this.userService.getUsers()
    }

    @Get('get/:id')
    user(@Param('id') id: any ): Promise<User> {
        return this.userService.getUserById(id)
    }

    @Post('create')
    create(@Body() user: User) {
        return this.userService.createUser(user);
    }

    @Post('/update/:id')
    update(@Param('id') id: string, @Body() user: User) {
      return this.userService.updateUser(+id, user);
    }

    @Delete('/remove/:id')
    remove(@Param('id') id: string) {
      return this.userService.remove(+id);
    }
  
  
}
