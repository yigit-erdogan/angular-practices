import { TestBed } from '@angular/core/testing';

import { MultipleSubscribersService } from './multiple-subscribers.service';

describe('MultipleSubscribersService', () => {
  let service: MultipleSubscribersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleSubscribersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
