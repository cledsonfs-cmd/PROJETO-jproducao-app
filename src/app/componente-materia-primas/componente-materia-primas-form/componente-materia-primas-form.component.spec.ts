import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMateriaPrimasFormComponent } from './componente-materia-primas-form.component';

describe('ComponenteMateriaPrimasFormComponent', () => {
  let component: ComponenteMateriaPrimasFormComponent;
  let fixture: ComponentFixture<ComponenteMateriaPrimasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteMateriaPrimasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteMateriaPrimasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
