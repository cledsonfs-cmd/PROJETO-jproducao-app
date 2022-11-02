import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPedidosFormComponent } from './item-pedidos-form.component';

describe('ItemPedidosFormComponent', () => {
  let component: ItemPedidosFormComponent;
  let fixture: ComponentFixture<ItemPedidosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPedidosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPedidosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
