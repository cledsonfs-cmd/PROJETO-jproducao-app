import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrazoEntregasFormComponent } from './prazo-entregas-form.component';

describe('PrazoEntregasFormComponent', () => {
  let component: PrazoEntregasFormComponent;
  let fixture: ComponentFixture<PrazoEntregasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrazoEntregasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrazoEntregasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
