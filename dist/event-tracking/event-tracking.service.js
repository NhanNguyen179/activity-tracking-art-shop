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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTrackingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const eventTracking_schema_1 = require("../schemas/eventTracking.schema");
const Types_1 = require("./Types/Types");
let EventTrackingService = class EventTrackingService {
    async addTrackingEvent(CreateEventTrackingDTO) {
        const createdCat = new this.trackingEventModel(CreateEventTrackingDTO);
        console.log({ createdCat, CreateEventTrackingDTO });
        await createdCat.save();
        return;
    }
    async getPopularCategoryOfUser(userId) {
        console.log({ userId });
        const result = await this.trackingEventModel
            .aggregate([
            {
                $match: {
                    Feature: Types_1.Feature.VisitProductDetailPage
                }
            },
            {
                $group: {
                    _id: '$' + Types_1.AttributeType.CategoryName,
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    value: '$_id',
                    count: 1
                }
            }
        ])
            .exec();
        return result;
    }
    async getPopularProduct() {
        const result = await this.trackingEventModel
            .aggregate([
            {
                $match: {
                    Feature: Types_1.Feature.VisitProductDetailPage
                }
            },
            {
                $group: {
                    _id: '$' + Types_1.AttributeType.ProductName,
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ])
            .exec();
        return result;
    }
    async getPopularCategory() {
        const result = await this.trackingEventModel
            .aggregate([
            {
                $match: {
                    Feature: Types_1.Feature.VisitProductDetailPage
                }
            },
            {
                $group: {
                    _id: '$' + Types_1.AttributeType.CategoryName,
                    count: { $sum: 1 }
                }
            }
        ])
            .exec();
        return result;
    }
    async getAmountUserAddAuctionProduct() {
        const result = await this.trackingEventModel
            .aggregate([
            {
                $match: {
                    Feature: Types_1.Feature.UserAddAuctionPrice
                }
            },
            {
                $group: {
                    _id: '$' + Types_1.AttributeType.UserId,
                    count: { $sum: 1 }
                }
            },
            {
                $count: 'result'
            }
        ])
            .exec();
        return result;
    }
    async getRecentAddAuctionPrice() {
        const result = await this.trackingEventModel
            .aggregate([
            {
                $project: {
                    title: '$Feature',
                    description: {
                        $concat: ['$UserEmail', ' - ', '$Outcome']
                    },
                    postedAt: '$LocalTimestamp'
                }
            },
            { $sort: { postedAt: -1 } },
            { $limit: 5 }
        ])
            .exec();
        return result;
    }
    async getAmountSessionId() {
        const result = await this.trackingEventModel
            .distinct(`${Types_1.AttributeType.SessionId}`)
            .exec();
        return result;
    }
    async getPopularBrowser() {
        const result = await this.trackingEventModel
            .aggregate([
            {
                $group: {
                    _id: '$' + Types_1.AttributeType.BrowserName,
                    count: { $sum: 1 }
                }
            }
        ])
            .exec();
        return result;
    }
    async getTotalUserAddAuctionPrice() {
        const result = await this.trackingEventModel
            .aggregate([
            {
                $match: {
                    Feature: Types_1.Feature.UserAddAuctionPrice
                }
            },
            {
                $count: 'result'
            }
        ])
            .exec();
        return result;
    }
    async getTotalApprovedAuction() {
        const result = await this.trackingEventModel
            .aggregate([
            {
                $match: {
                    Feature: Types_1.Feature.ApprovedAuctionProduct
                }
            },
            {
                $count: 'result'
            }
        ])
            .exec();
        return result;
    }
    async getAmountUserAccessWebsite(groupByOption) {
        const dateField = 'LocalTimestamp';
        const sessionIdField = 'SessionId';
        const result = await this.trackingEventModel.aggregate([
            {
                $addFields: {
                    convertedDate: {
                        $toDate: `$${dateField}`
                    }
                }
            },
            {
                $group: {
                    _id: {
                        sessionId: `$${sessionIdField}`,
                        date: {
                            $switch: {
                                branches: [
                                    {
                                        case: { $eq: [groupByOption, 'day'] },
                                        then: {
                                            $dateToString: {
                                                format: '%Y-%m-%d',
                                                date: '$convertedDate'
                                            }
                                        }
                                    },
                                    {
                                        case: { $eq: [groupByOption, 'week'] },
                                        then: {
                                            $dateToString: {
                                                format: '%Y-%U',
                                                date: '$convertedDate'
                                            }
                                        }
                                    },
                                    {
                                        case: { $eq: [groupByOption, 'month'] },
                                        then: {
                                            $dateToString: {
                                                format: '%Y-%m',
                                                date: '$convertedDate'
                                            }
                                        }
                                    }
                                ],
                                default: null
                            }
                        }
                    }
                }
            },
            {
                $match: {
                    '_id.date': { $ne: null }
                }
            },
            {
                $group: {
                    _id: '$_id.date',
                    sessionCounts: {
                        $addToSet: '$_id.sessionId'
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    [groupByOption]: '$_id',
                    sessionCount: { $size: '$sessionCounts' }
                }
            },
            {
                $group: {
                    _id: null,
                    dates: { $push: `$${groupByOption}` },
                    sessionCounts: { $push: '$sessionCount' }
                }
            },
            {
                $project: {
                    _id: 0,
                    dates: 1,
                    sessionCounts: 1
                }
            }
        ]);
        return result;
    }
};
__decorate([
    (0, mongoose_1.InjectModel)(eventTracking_schema_1.TrackingEvent.name),
    __metadata("design:type", mongoose_2.Model)
], EventTrackingService.prototype, "trackingEventModel", void 0);
EventTrackingService = __decorate([
    (0, common_1.Injectable)()
], EventTrackingService);
exports.EventTrackingService = EventTrackingService;
//# sourceMappingURL=event-tracking.service.js.map