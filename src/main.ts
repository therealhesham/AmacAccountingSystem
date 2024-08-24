import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Res,  ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import cors from "cors"
import { Prisma, PrismaClient } from '@prisma/client';
async function bootstrap() {

  const app = await NestFactory.create(AppModule,{cors:true});
  app.enableCors({origin:"https://amacwindmill-dashboard-react.vercel.app"});
await app.listen(process.env.PORT || 3003);
}
bootstrap();
