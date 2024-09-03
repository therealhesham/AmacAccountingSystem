import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Res,  ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import os from "os"
import cors from "cors"
import { Prisma, PrismaClient } from '@prisma/client';
import cluster from 'cluster';
// cluster.isMaster
// os.cpus
async function bootstrap() {
// "https://amacwindmill-dashboard-react.vercel.app"
  const app = await NestFactory.create(AppModule,{cors:true});
  app.enableCors({origin:"http://localhost:3000"});
await app.listen(process.env.PORT || 3003);
}
bootstrap();
