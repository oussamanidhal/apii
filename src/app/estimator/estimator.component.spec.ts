import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatorComponent } from './estimator.component';

describe('EstimatorComponent', () => {
  let component: EstimatorComponent;
  let fixture: ComponentFixture<EstimatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstimatorComponent]
    });
    fixture = TestBed.createComponent(EstimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
