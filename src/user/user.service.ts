import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/database/entities/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly UserDao: Repository<User>,
    ) {}

    async getUsers(): Promise<User[]> {
        let users: User[] = await this.UserDao.find()
        return users 
    }

    async getUserById(id:any): Promise<User> {
        let user: User = await this.UserDao.findOne({where: {id: parseInt(id)}})
        return user
    }

    async createUser(user:User) {
        await this.UserDao.insert(user)
        return { success: true };
    }

    async updateUser(user: User) {
        await this.UserDao.update({ id:user.id }, user);
        return { success: true };
    }

    async remove(id: number) {
        await this.UserDao.softDelete({ id });
        return { success: true };
    }

}
