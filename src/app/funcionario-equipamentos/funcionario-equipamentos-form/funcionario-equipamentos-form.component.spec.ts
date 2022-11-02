import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioEquipamentosFormComponent } from './funcionario-equipamentos-form.component';

describe('FuncionarioEquipamentosFormComponent', () => {
  let component: FuncionarioEquipamentosFormComponent;
  let fixture: ComponentFixture<FuncionarioEquipamentosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioEquipamentosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioEquipamentosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
