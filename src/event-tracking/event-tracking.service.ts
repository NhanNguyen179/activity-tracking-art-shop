import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrackingEvent } from 'src/schemas/eventTracking.schema';
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
                },
            ])
            .exec();

        return result;
    }
}
