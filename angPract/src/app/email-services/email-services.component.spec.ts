import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailServicesComponent } from './email-services.component';

describe('EmailServicesComponent', () => {
  let component: EmailServicesComponent;
  let fixture: ComponentFixture<EmailServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
