import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuddleSingleComponent } from './huddle-single.component';

describe('HuddleSingleComponent', () => {
  let component: HuddleSingleComponent;
  let fixture: ComponentFixture<HuddleSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuddleSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuddleSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
