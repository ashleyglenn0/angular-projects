import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuddleCurvedComponent } from './huddle-curved.component';

describe('HuddleCurvedComponent', () => {
  let component: HuddleCurvedComponent;
  let fixture: ComponentFixture<HuddleCurvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuddleCurvedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuddleCurvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
