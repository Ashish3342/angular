import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienRegComponent } from './patien-reg.component';

describe('PatienRegComponent', () => {
  let component: PatienRegComponent;
  let fixture: ComponentFixture<PatienRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatienRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatienRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
