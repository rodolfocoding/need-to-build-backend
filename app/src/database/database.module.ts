import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'user',
      host: 'localhost',
      username: 'postgres',
      password: 'docker',
      synchronize: true,
      entities: [UserEntity],
    }),
  ],
})
export class DatabaseModule {}
