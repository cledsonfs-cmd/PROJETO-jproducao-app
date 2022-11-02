import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteirasFormComponent } from './carteiras-form.component';

describe('CarteirasFormComponent', () => {
  let component: CarteirasFormComponent;
  let fixture: ComponentFixture<CarteirasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteirasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteirasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
