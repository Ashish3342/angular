import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienAppoinmtFrmComponent } from './patien-appoinmt-frm.component';

describe('PatienAppoinmtFrmComponent', () => {
  let component: PatienAppoinmtFrmComponent;
  let fixture: ComponentFixture<PatienAppoinmtFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatienAppoinmtFrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatienAppoinmtFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
