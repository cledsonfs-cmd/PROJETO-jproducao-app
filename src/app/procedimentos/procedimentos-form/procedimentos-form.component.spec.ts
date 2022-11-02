import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimentosFormComponent } from './procedimentos-form.component';

describe('ProcedimentosFormComponent', () => {
  let component: ProcedimentosFormComponent;
  let fixture: ComponentFixture<ProcedimentosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedimentosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedimentosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
