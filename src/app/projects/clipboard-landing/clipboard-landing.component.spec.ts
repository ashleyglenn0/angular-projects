import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardLandingComponent } from './clipboard-landing.component';

describe('ClipboardLandingComponent', () => {
  let component: ClipboardLandingComponent;
  let fixture: ComponentFixture<ClipboardLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClipboardLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipboardLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
