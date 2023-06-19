import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { EventTrackingService } from './event-tracking.service';
import { CreateEventTrackingDTO } from './dto/createEventDto';

@Controller('event-tracking')
export class EventTrackingController {
    constructor(private eventTrackingService: EventTrackingService) {}
    @Post('/add-tracking-event')
    async addTrackingEvent(@Body() data: {data :CreateEventTrackingDTO}) {
        this.eventTrackingService.addTrackingEvent(data.data);
        return 'Add tracking Event.';
    }

    @Get('/get-popular-category-of-user')
    async getPopularCategoryOfUser(@Query('userId') userId: string) {
        const respone = this.eventTrackingService.getPopularCategoryOfUser(userId);
        return respone;
    }

}
