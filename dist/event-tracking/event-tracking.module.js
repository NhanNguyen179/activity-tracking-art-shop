"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTrackingModule = void 0;
const common_1 = require("@nestjs/common");
const event_tracking_controller_1 = require("./event-tracking.controller");
const event_tracking_service_1 = require("./event-tracking.service");
const mongoose_1 = require("@nestjs/mongoose");
const eventTracking_schema_1 = require("../schemas/eventTracking.schema");
let EventTrackingModule = class EventTrackingModule {
};
EventTrackingModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: eventTracking_schema_1.TrackingEvent.name, schema: eventTracking_schema_1.TrackingEventSchema }])],
        controllers: [event_tracking_controller_1.EventTrackingController],
        providers: [event_tracking_service_1.EventTrackingService],
    })
], EventTrackingModule);
exports.EventTrackingModule = EventTrackingModule;
//# sourceMappingURL=event-tracking.module.js.map