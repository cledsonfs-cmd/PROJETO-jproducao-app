import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprogramacoesFormComponent } from './reprogramacoes-form.component';

describe('ReprogramacoesFormComponent', () => {
  let component: ReprogramacoesFormComponent;
  let fixture: ComponentFixture<ReprogramacoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprogramacoesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReprogramacoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
