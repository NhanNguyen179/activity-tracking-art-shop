"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTrackingController = void 0;
const common_1 = require("@nestjs/common");
const event_tracking_service_1 = require("./event-tracking.service");
let EventTrackingController = class EventTrackingController {
    constructor(eventTrackingService) {
        this.eventTrackingService = eventTrackingService;
    }
    async addTrackingEvent(data) {
        this.eventTrackingService.addTrackingEvent(data.data);
        return 'Add tracking Event.';
    }
    async getPopularCategoryOfUser(userId) {
        const respone = this.eventTrackingService.getPopularCategoryOfUser(userId);
        return respone;
    }
    async getPopularProduct() {
        const respone = this.eventTrackingService.getPopularProduct();
        return respone;
    }
    async getPopularCategory() {
        const respone = this.eventTrackingService.getPopularCategory();
        return respone;
    }
    async getAmountUserAddAuctionProduct() {
        const respone = this.eventTrackingService.getAmountUserAddAuctionProduct();
        return respone;
    }
    async getRecentAddAuctionPrice() {
        const respone = this.eventTrackingService.getRecentAddAuctionPrice();
        return respone;
    }
    async getAmountSessionId() {
        const respone = this.eventTrackingService.getAmountSessionId();
        return respone;
    }
    async getPopularBrowser() {
        const respone = this.eventTrackingService.getPopularBrowser();
        return respone;
    }
    async getTotalUserAddAuctionPrice() {
        const respone = this.eventTrackingService.getTotalUserAddAuctionPrice();
        return respone;
    }
    async getTotalApprovedAuction() {
        const respone = this.eventTrackingService.getTotalApprovedAuction();
        return respone;
    }
};
__decorate([
    (0, common_1.Post)('/add-tracking-event'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventTrackingController.prototype, "addTrackingEvent", null);
__decorate([
    (0, common_1.Get)('/get-popular-category-of-user'),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventTrackingController.prototype, "getPopularCategoryOfUser", null);
__decorate([
    (0, common_1.Get)('/get-popular-product'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventTrackingController.prototype, "getPopularProduct", null);
__decorate([
    (0, common_1.Get)('/get-popular-category'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventTrackingController.prototype, "getPopularCategory", null);
__decorate([
    (0, common_1.Get)('/get-amount-user-add-auction-product'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventTrackingController.prototype, "getAmountUserAddAuctionProduct", null);
__decorate([
    (0, common_1.Get)('/get-recent-add-auction-price'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventTrackingController.prototype, "getRecentAddAuctionPrice", null);
__decorate([
    (0, common_1.Get)('/get-amount-session-id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventTrackingController.prototype, "getAmountSessionId", null);
__decorate([
    (0, common_1.Get)('/get-popular-browser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventTrackingController.prototype, "getPopularBrowser", null);
__decorate([
    (0, common_1.Get)('/get-total-user-add-auction-price'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventTrackingController.prototype, "getTotalUserAddAuctionPrice", null);
__decorate([
    (0, common_1.Get)('/get-total-approved-auction'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventTrackingController.prototype, "getTotalApprovedAuction", null);
EventTrackingController = __decorate([
    (0, common_1.Controller)('event-tracking'),
    __metadata("design:paramtypes", [event_tracking_service_1.EventTrackingService])
], EventTrackingController);
exports.EventTrackingController = EventTrackingController;
//# sourceMappingURL=event-tracking.controller.js.map