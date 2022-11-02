import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivoReprogramacoesFormComponent } from './motivo-reprogramacoes-form.component';

describe('MotivoReprogramacoesFormComponent', () => {
  let component: MotivoReprogramacoesFormComponent;
  let fixture: ComponentFixture<MotivoReprogramacoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivoReprogramacoesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivoReprogramacoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
