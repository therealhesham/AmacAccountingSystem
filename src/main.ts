import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Res,  ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import cors from "cors"
import { Prisma, PrismaClient } from '@prisma/client';
async function bootstrap() {

  const app = await NestFactory.create(AppModule,{cors:true});
  // new PrismaClient().$queryRaw`create table "Double_Entry"`
  // res.header("access-allow-origins","http://localhost:3000")
// app.use(ValidationPipe())
// app.use(cors({origin:""}))
app.enableCors();
await app.listen(3003);
}
bootstrap();
