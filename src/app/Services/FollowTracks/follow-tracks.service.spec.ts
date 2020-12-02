import { TestBed } from '@angular/core/testing';

import { FollowTracksService } from './follow-tracks.service';

describe('FollowTracksService', () => {
  let service: FollowTracksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowTracksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
