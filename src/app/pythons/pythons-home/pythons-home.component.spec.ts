import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonsHomeComponent } from './pythons-home.component';

describe('PythonsHomeComponent', () => {
  let component: PythonsHomeComponent;
  let fixture: ComponentFixture<PythonsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PythonsHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PythonsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
