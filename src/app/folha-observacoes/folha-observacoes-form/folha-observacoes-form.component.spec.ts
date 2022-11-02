import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhaObservacoesFormComponent } from './folha-observacoes-form.component';

describe('FolhaObservacoesFormComponent', () => {
  let component: FolhaObservacoesFormComponent;
  let fixture: ComponentFixture<FolhaObservacoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolhaObservacoesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolhaObservacoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
