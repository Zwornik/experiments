import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperHomeComponent } from './exper-home.component';

describe('ExperHomeComponent', () => {
  let component: ExperHomeComponent;
  let fixture: ComponentFixture<ExperHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
