import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChhildComponent } from './chhild.component';

describe('ChhildComponent', () => {
  let component: ChhildComponent;
  let fixture: ComponentFixture<ChhildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChhildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChhildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
