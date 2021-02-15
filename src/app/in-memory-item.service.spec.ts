import { TestBed } from '@angular/core/testing';

import { InMemoryItemService } from './in-memory-item.service';

describe('InMemoryItemService', () => {
  let service: InMemoryItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
