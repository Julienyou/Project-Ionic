import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvsJobsPage } from './cvs-jobs.page';

describe('CvsJobsPage', () => {
  let component: CvsJobsPage;
  let fixture: ComponentFixture<CvsJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsJobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvsJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
