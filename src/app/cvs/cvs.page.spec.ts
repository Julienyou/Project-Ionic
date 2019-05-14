import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvsPage } from './cvs.page';

describe('CvsPage', () => {
  let component: CvsPage;
  let fixture: ComponentFixture<CvsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
