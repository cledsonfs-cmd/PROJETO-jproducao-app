import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosFormComponent } from './equipamentos-form.component';

describe('EquipamentosFormComponent', () => {
  let component: EquipamentosFormComponent;
  let fixture: ComponentFixture<EquipamentosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipamentosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipamentosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
