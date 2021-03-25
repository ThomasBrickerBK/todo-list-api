import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

const envFilePath = [
  '.env.development.local',
  '.env.development',
  '.development.env',
  '.env.production.local',
  '.env.production',
  '.production.env',
  '.env.local',
  '.env',
];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
    }),
    MongooseModule.forRoot(process.env.DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
