import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoSetoresFormComponent } from './consumo-setores-form.component';

describe('ConsumoSetoresFormComponent', () => {
  let component: ConsumoSetoresFormComponent;
  let fixture: ComponentFixture<ConsumoSetoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoSetoresFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumoSetoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
