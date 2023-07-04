/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from "mongoose";
export type TrackingEventDocument = TrackingEvent & Document;
export declare class TrackingEvent {
    Application: string;
    Page: string;
    Url: string;
    ActionType: string;
    Action: string;
    SessionId: string;
    LocalTimestamp: string;
    Outcome: string;
    Feature: string;
    UserId: string;
    UserEmail: string;
    UserType: string;
    BrowserName: string;
    BrowserVersion: string;
    BrowserLayout: string;
    ClientOS: string;
    UserAgent: string;
    Attribute1: string;
    Attribute2: string;
    Attribute3: string;
    Attribute4: string;
    Attribute5: string;
    Attribute6: string;
    Attribute7: string;
    Attribute8: string;
    Attribute9: string;
    Attribute10: string;
}
export declare const TrackingEventSchema: import("mongoose").Schema<TrackingEvent, import("mongoose").Model<TrackingEvent, any, any, any, Document<unknown, any, TrackingEvent> & Omit<TrackingEvent & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TrackingEvent, Document<unknown, {}, import("mongoose").FlatRecord<TrackingEvent>> & Omit<import("mongoose").FlatRecord<TrackingEvent> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
