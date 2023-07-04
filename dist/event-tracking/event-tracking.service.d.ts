import { CreateEventTrackingDTO } from './dto/createEventDto';
export declare class EventTrackingService {
    private trackingEventModel;
    addTrackingEvent(CreateEventTrackingDTO: CreateEventTrackingDTO): Promise<void>;
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
