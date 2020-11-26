import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAppCssComponent } from './chat-app-css.component';

describe('ChatAppCssComponent', () => {
  let component: ChatAppCssComponent;
  let fixture: ComponentFixture<ChatAppCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatAppCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAppCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
