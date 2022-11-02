import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucoesFormComponent } from './devolucoes-form.component';

describe('DevolucoesFormComponent', () => {
  let component: DevolucoesFormComponent;
  let fixture: ComponentFixture<DevolucoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucoesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolucoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
