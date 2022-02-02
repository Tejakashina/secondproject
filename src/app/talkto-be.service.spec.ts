import { TestBed } from '@angular/core/testing';

import { TalktoBEService } from './talkto-be.service';

describe('TalktoBEService', () => {
  let service: TalktoBEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalktoBEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
