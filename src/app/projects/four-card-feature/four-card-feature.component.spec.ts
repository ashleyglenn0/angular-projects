import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourCardFeatureComponent } from './four-card-feature.component';

describe('FourCardFeatureComponent', () => {
  let component: FourCardFeatureComponent;
  let fixture: ComponentFixture<FourCardFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourCardFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourCardFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
