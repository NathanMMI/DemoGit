import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompIrvinComponent } from './comp-irvin.component';

describe('CompIrvinComponent', () => {
  let component: CompIrvinComponent;
  let fixture: ComponentFixture<CompIrvinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompIrvinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompIrvinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
