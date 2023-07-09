"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 12:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventTrackingService = void 0;
const common_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(13);
const eventTracking_schema_1 = __webpack_require__(14);
const Types_1 = __webpack_require__(15);
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
    async getAmountUserAccessWebsite() {
        const dateField = 'LocalTimestamp';
        let groupByOption = 'day';
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
                    },
                    count: { $sum: 1 }
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
                        $push: {
                            sessionId: '$_id.sessionId',
                            count: '$count'
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    [groupByOption]: '$_id',
                    sessionCounts: 1
                }
            }
        ]);
        return result;
    }
};
__decorate([
    (0, mongoose_1.InjectModel)(eventTracking_schema_1.TrackingEvent.name),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object)
], EventTrackingService.prototype, "trackingEventModel", void 0);
EventTrackingService = __decorate([
    (0, common_1.Injectable)()
], EventTrackingService);
exports.EventTrackingService = EventTrackingService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b40dbd7472d79cd95e9")
/******/ })();
/******/ 
/******/ }
;