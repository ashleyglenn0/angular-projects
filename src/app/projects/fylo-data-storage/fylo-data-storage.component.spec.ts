import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FyloDataStorageComponent } from './fylo-data-storage.component';

describe('FyloDataStorageComponent', () => {
  let component: FyloDataStorageComponent;
  let fixture: ComponentFixture<FyloDataStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FyloDataStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FyloDataStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
