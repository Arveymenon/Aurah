import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListPage } from './album-list.page';

describe('AlbumListPage', () => {
  let component: AlbumListPage;
  let fixture: ComponentFixture<AlbumListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
