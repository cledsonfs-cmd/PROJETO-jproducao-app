import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaProducoesFormComponent } from './linha-producoes-form.component';

describe('LinhaProducoesFormComponent', () => {
  let component: LinhaProducoesFormComponent;
  let fixture: ComponentFixture<LinhaProducoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinhaProducoesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinhaProducoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
