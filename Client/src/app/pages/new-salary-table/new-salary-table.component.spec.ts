import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalaryTableComponent } from './new-salary-table.component';

describe('NewSalaryTableComponent', () => {
  let component: NewSalaryTableComponent;
  let fixture: ComponentFixture<NewSalaryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSalaryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSalaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
