import { TestBed } from '@angular/core/testing';

import { AccountinfoserviceService } from './accountinfoservice.service';

describe('AccountinfoserviceService', () => {
  let service: AccountinfoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountinfoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
