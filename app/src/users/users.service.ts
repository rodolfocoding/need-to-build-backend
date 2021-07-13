import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response, response } from 'express';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<IUser>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async create(user: IUser): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }
}
