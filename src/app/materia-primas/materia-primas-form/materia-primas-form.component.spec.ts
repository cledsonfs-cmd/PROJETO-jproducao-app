import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaPrimasFormComponent } from './materia-primas-form.component';

describe('MateriaPrimasFormComponent', () => {
  let component: MateriaPrimasFormComponent;
  let fixture: ComponentFixture<MateriaPrimasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaPrimasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaPrimasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
