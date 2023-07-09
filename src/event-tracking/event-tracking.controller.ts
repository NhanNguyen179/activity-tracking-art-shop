import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { EventTrackingService } from './event-tracking.service';
import { CreateEventTrackingDTO } from './dto/createEventDto';

@Controller('event-tracking')
export class EventTrackingController {
    constructor(private eventTrackingService: EventTrackingService) {}
    @Post('/add-tracking-event')
    async addTrackingEvent(@Body() data: { data: CreateEventTrackingDTO }) {
        this.eventTrackingService.addTrackingEvent(data.data);
        return 'Add tracking Event.';
    }

    @Get('/get-popular-category-of-user')
    async getPopularCategoryOfUser(@Query('userId') userId: string) {
        const respone =
            this.eventTrackingService.getPopularCategoryOfUser(userId);
        return respone;
    }

    @Get('/get-popular-product')
    async getPopularProduct() {
        const respone = this.eventTrackingService.getPopularProduct();
        return respone;
    }

    @Get('/get-popular-category')
    async getPopularCategory() {
        const respone = this.eventTrackingService.getPopularCategory();
        return respone;
    }

    @Get('/get-amount-user-add-auction-product')
    async getAmountUserAddAuctionProduct() {
        const respone =
            this.eventTrackingService.getAmountUserAddAuctionProduct();
        return respone;
    }

    @Get('/get-recent-add-auction-price')
    async getRecentAddAuctionPrice() {
        const respone = this.eventTrackingService.getRecentAddAuctionPrice();
        return respone;
    }

    @Get('/get-amount-session-id')
    async getAmountSessionId() {
        const respone = this.eventTrackingService.getAmountSessionId();
        return respone;
    }

    @Get('/get-popular-browser')
    async getPopularBrowser() {
        const respone = this.eventTrackingService.getPopularBrowser();
        return respone;
    }

    @Get('/get-total-user-add-auction-price')
    async getTotalUserAddAuctionPrice() {
        const respone = this.eventTrackingService.getTotalUserAddAuctionPrice();
        return respone;
    }

    @Get('/get-total-approved-auction')
    async getTotalApprovedAuction() {
        const respone = this.eventTrackingService.getTotalApprovedAuction();
        return respone;
    }

    @Get('/get-amount-user-access-website')
    async getAmountUserAccessWebsite(@Query('groupByOption') groupByOption: string) {
        const respone = this.eventTrackingService.getAmountUserAccessWebsite(groupByOption);
        return respone;
    }
}
