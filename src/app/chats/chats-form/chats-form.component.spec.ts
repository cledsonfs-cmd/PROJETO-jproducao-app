import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsFormComponent } from './chats-form.component';

describe('ChatsFormComponent', () => {
  let component: ChatsFormComponent;
  let fixture: ComponentFixture<ChatsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
