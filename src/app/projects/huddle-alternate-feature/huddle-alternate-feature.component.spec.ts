import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuddleAlternateFeatureComponent } from './huddle-alternate-feature.component';

describe('HuddleAlternateFeatureComponent', () => {
  let component: HuddleAlternateFeatureComponent;
  let fixture: ComponentFixture<HuddleAlternateFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuddleAlternateFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuddleAlternateFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
