import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducoesFormComponent } from './producoes-form.component';

describe('ProducoesFormComponent', () => {
  let component: ProducoesFormComponent;
  let fixture: ComponentFixture<ProducoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducoesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
