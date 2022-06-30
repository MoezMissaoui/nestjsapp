import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, ENV } from "src/config";


@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: DB_HOST,
          port: +DB_PORT,
          username: DB_USER,
          password: DB_PASS,
          database: DB_NAME,
          autoLoadEntities: true,
          synchronize: ENV !== "production",
          logging: true,
          debug: false
        }),
      ],
    
})
export class DatabaseModule {}
