import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";

export type TrackingEventDocument = TrackingEvent & Document;

@Schema()
export class TrackingEvent {
    @Prop()
    Application: string;

    @Prop()
    Page: string;

    @Prop()
    Url: string;

    @Prop()
    ActionType: string;

    @Prop()
    Action: string;

    @Prop()
    SessionId: string;
    @Prop()
    LocalTimestamp: string;
    @Prop()
    Outcome: string;
    @Prop()
    Feature: string;
    @Prop()
    UserId: string;
    @Prop()
    UserEmail: string;
    @Prop()
    UserType: string;
    @Prop()
    BrowserName: string;
    @Prop()
    BrowserVersion: string;
    @Prop()
    BrowserLayout: string;
    @Prop()
    ClientOS: string;
    @Prop()
    UserAgent: string;
    @Prop()
    Attribute1: string;
    @Prop()
    Attribute2: string;
    @Prop()
    Attribute3: string;
    @Prop()
    Attribute4: string;
    @Prop()
    Attribute5: string;
    @Prop()
    Attribute6: string;
    @Prop()
    Attribute7: string;
    @Prop()
    Attribute8: string;
    @Prop()
    Attribute9: string;
    @Prop()
    Attribute10: string;
}

export const TrackingEventSchema = SchemaFactory.createForClass(TrackingEvent);
