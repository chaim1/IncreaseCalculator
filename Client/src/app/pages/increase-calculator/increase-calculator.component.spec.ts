import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseCalculatorComponent } from './increase-calculator.component';

describe('IncreaseCalculatorComponent', () => {
  let component: IncreaseCalculatorComponent;
  let fixture: ComponentFixture<IncreaseCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncreaseCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
