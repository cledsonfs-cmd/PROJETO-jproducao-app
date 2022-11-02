import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoOpsFormComponent } from './cartao-ops-form.component';

describe('CartaoOpsFormComponent', () => {
  let component: CartaoOpsFormComponent;
  let fixture: ComponentFixture<CartaoOpsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoOpsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoOpsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
