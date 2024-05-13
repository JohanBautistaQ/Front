import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEmailsComponent } from './company-emails.component';

describe('CompanyEmailsComponent', () => {
  let component: CompanyEmailsComponent;
  let fixture: ComponentFixture<CompanyEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyEmailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
