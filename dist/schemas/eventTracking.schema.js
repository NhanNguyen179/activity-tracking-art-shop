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
exports.TrackingEventSchema = exports.TrackingEvent = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let TrackingEvent = class TrackingEvent {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Application", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Page", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "ActionType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Action", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "SessionId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "LocalTimestamp", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Outcome", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Feature", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "UserId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "UserEmail", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "UserType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "BrowserName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "BrowserVersion", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "BrowserLayout", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "ClientOS", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "UserAgent", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Attribute1", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Attribute2", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Attribute3", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Attribute4", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Attribute5", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Attribute6", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Attribute7", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Attribute8", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Attribute9", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TrackingEvent.prototype, "Attribute10", void 0);
TrackingEvent = __decorate([
    (0, mongoose_1.Schema)()
], TrackingEvent);
exports.TrackingEvent = TrackingEvent;
exports.TrackingEventSchema = mongoose_1.SchemaFactory.createForClass(TrackingEvent);
//# sourceMappingURL=eventTracking.schema.js.map