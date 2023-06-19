import { Test, TestingModule } from '@nestjs/testing';
import { EventTrackingController } from './event-tracking.controller';

describe('EventTrackingController', () => {
  let controller: EventTrackingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventTrackingController],
    }).compile();

    controller = module.get<EventTrackingController>(EventTrackingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
