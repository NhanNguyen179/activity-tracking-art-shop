import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrackingEvent } from '../schemas/eventTracking.schema';
import { CreateEventTrackingDTO } from './dto/createEventDto';
import { AttributeType, Feature } from './Types/Types';

@Injectable()
export class EventTrackingService {
    @InjectModel(TrackingEvent.name)
    private trackingEventModel: Model<TrackingEvent>;
    async addTrackingEvent(CreateEventTrackingDTO: CreateEventTrackingDTO) {
        const createdCat = new this.trackingEventModel(CreateEventTrackingDTO);
        console.log({ createdCat, CreateEventTrackingDTO });
        await createdCat.save();
        return;
    }

    async getPopularCategoryOfUser(userId: string) {
        console.log({ userId });
        const result = await this.trackingEventModel
            .aggregate([
                {
                    $match: {
                        Feature: Feature.VisitProductDetailPage
                    }
                },
                {
                    $group: {
                        _id: '$' + AttributeType.CategoryName,
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
                        Feature: Feature.VisitProductDetailPage
                    }
                },
                {
                    $group: {
                        _id: '$' + AttributeType.ProductName,
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
                        Feature: Feature.VisitProductDetailPage
                    }
                },
                {
                    $group: {
                        _id: '$' + AttributeType.CategoryName,
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
                        Feature: Feature.UserAddAuctionPrice
                    }
                },
                {
                    $group: {
                        _id: '$' + AttributeType.UserId,
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
            .distinct(`${AttributeType.SessionId}`)
            .exec();
        return result;
    }

    async getPopularBrowser() {
        const result = await this.trackingEventModel
            .aggregate([
                {
                    $group: {
                        _id: '$' + AttributeType.BrowserName,
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
                        Feature: Feature.UserAddAuctionPrice
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
                        Feature: Feature.ApprovedAuctionProduct
                    }
                },
                {
                    $count: 'result'
                }
            ])
            .exec();
        return result;
    }

    async getAmountUserAccessWebsite(groupByOption: string) {
        const dateField = 'LocalTimestamp'; // Replace 'yourDateField' with the actual field name in your model

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
}
