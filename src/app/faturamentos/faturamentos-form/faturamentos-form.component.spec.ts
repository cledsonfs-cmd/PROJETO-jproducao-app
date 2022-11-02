import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturamentosFormComponent } from './faturamentos-form.component';

describe('FaturamentosFormComponent', () => {
  let component: FaturamentosFormComponent;
  let fixture: ComponentFixture<FaturamentosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturamentosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaturamentosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
