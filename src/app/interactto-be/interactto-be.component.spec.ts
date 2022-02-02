import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteracttoBEComponent } from './interactto-be.component';

describe('InteracttoBEComponent', () => {
  let component: InteracttoBEComponent;
  let fixture: ComponentFixture<InteracttoBEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteracttoBEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteracttoBEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
