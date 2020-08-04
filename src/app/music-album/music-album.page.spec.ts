import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicAlbumPage } from './music-album.page';

describe('MusicAlbumPage', () => {
  let component: MusicAlbumPage;
  let fixture: ComponentFixture<MusicAlbumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicAlbumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
