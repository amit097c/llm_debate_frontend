import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatscreenComponent } from './chatscreen.component';

describe('ChatscreenComponent', () => {
  let component: ChatscreenComponent;
  let fixture: ComponentFixture<ChatscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatscreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
