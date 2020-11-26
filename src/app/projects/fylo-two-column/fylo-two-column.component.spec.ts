import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FyloTwoColumnComponent } from './fylo-two-column.component';

describe('FyloTwoColumnComponent', () => {
  let component: FyloTwoColumnComponent;
  let fixture: ComponentFixture<FyloTwoColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FyloTwoColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FyloTwoColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
