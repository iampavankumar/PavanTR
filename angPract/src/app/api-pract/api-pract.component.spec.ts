import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPractComponent } from './api-pract.component';

describe('ApiPractComponent', () => {
  let component: ApiPractComponent;
  let fixture: ComponentFixture<ApiPractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
