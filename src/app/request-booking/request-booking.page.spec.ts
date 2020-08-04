import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBookingPage } from './request-booking.page';

describe('RequestBookingPage', () => {
  let component: RequestBookingPage;
  let fixture: ComponentFixture<RequestBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBookingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
