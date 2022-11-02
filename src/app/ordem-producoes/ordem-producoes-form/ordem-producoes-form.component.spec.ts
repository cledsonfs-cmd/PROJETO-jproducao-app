import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemProducoesFormComponent } from './ordem-producoes-form.component';

describe('OrdemProducoesFormComponent', () => {
  let component: OrdemProducoesFormComponent;
  let fixture: ComponentFixture<OrdemProducoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemProducoesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemProducoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
