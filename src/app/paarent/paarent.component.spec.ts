import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaarentComponent } from './paarent.component';

describe('PaarentComponent', () => {
  let component: PaarentComponent;
  let fixture: ComponentFixture<PaarentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaarentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaarentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
