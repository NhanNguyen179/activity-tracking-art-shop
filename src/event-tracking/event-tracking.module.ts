import { Module } from '@nestjs/common';
import { EventTrackingController } from './event-tracking.controller';
import { EventTrackingService } from './event-tracking.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackingEvent, TrackingEventSchema } from 'src/schemas/eventTracking.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: TrackingEvent.name, schema: TrackingEventSchema }])],
  controllers: [EventTrackingController],
  providers: [EventTrackingService],
})
export class EventTrackingModule {}
