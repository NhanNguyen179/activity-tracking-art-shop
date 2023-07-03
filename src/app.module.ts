import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EventTrackingModule } from './event-tracking/event-tracking.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nhanadmin:.Nhan17092001@cluster0.k0bbe.mongodb.net/'),
    EventTrackingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
