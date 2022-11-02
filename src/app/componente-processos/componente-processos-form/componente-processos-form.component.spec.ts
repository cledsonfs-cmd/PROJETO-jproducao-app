import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteProcessosFormComponent } from './componente-processos-form.component';

describe('ComponenteProcessosFormComponent', () => {
  let component: ComponenteProcessosFormComponent;
  let fixture: ComponentFixture<ComponenteProcessosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteProcessosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteProcessosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
