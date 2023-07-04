import { EventTrackingService } from './event-tracking.service';
import { CreateEventTrackingDTO } from './dto/createEventDto';
export declare class EventTrackingController {
    private eventTrackingService;
    constructor(eventTrackingService: EventTrackingService);
    addTrackingEvent(data: {
        data: CreateEventTrackingDTO;
    }): Promise<string>;
    getPopularCategoryOfUser(userId: string): Promise<any[]>;
    getPopularProduct(): Promise<any[]>;
    getPopularCategory(): Promise<any[]>;
    getAmountUserAddAuctionProduct(): Promise<any[]>;
    getRecentAddAuctionPrice(): Promise<any[]>;
    getAmountSessionId(): Promise<any[]>;
    getPopularBrowser(): Promise<any[]>;
    getTotalUserAddAuctionPrice(): Promise<any[]>;
    getTotalApprovedAuction(): Promise<any[]>;
}
