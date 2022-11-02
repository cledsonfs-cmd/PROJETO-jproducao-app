import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentoSetoresFormComponent } from './movimento-setores-form.component';

describe('MovimentoSetoresFormComponent', () => {
  let component: MovimentoSetoresFormComponent;
  let fixture: ComponentFixture<MovimentoSetoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentoSetoresFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentoSetoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
