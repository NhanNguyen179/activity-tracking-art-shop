import { Test, TestingModule } from '@nestjs/testing';
import { EventTrackingService } from './event-tracking.service';

describe('EventTrackingService', () => {
  let service: EventTrackingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventTrackingService],
    }).compile();

    service = module.get<EventTrackingService>(EventTrackingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
