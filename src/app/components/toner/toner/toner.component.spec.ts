import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerComponent } from './toner.component';

describe('TonerComponent', () => {
  let component: TonerComponent;
  let fixture: ComponentFixture<TonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
