import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImprimanteComponent } from './add-imprimante.component';

describe('AddImprimanteComponent', () => {
  let component: AddImprimanteComponent;
  let fixture: ComponentFixture<AddImprimanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImprimanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddImprimanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
