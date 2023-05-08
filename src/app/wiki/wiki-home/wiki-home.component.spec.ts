import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiHomeComponent } from './wiki-home.component';

describe('WikiHomeComponent', () => {
  let component: WikiHomeComponent;
  let fixture: ComponentFixture<WikiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
