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
  // "http://localhost:3000"
// "https://amacwindmill-dashboard-react.vercel.app"
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin:"https://ceoamac.vercel.app"});
await app.listen(process.env.PORT || 3003);
}
bootstrap();
