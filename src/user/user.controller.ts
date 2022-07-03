import { Body, Controller, Delete, Get, Param, Patch, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { User } from 'src/database/entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    /**
     * 
     * POST && GET
     * 
     */
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

    /**
     * 
     * DELETE && UPDATE
     */

    @Patch('update')
    update(@Body() user:User){
      return this.userService.updateUser(user);
    }

    @Delete('remove')
    remove(@Body() user:User) {
      return this.userService.remove(user.id);
    }
    
      /** Send id in Params */
      @Delete('/remove/:id')
      removeByID(@Param('id') id: string) {
        return this.userService.remove(+id);
      }

    /**
     * 
     * Download && Upload
     * 
     */

    @Get('download')
    downoad(@Res() response){
      const filename = "user.xlsx";
      return response.download('src/files/xlsx/'+filename)
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    upload(@UploadedFile() file){
      const path = "src/files/xlsx/uploaded/"+file.originalname
      const wstream = createWriteStream(path)
      wstream.write(file.buffer)
      console.log(file)
    }
  
}
