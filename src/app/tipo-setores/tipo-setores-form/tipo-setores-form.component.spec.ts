import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSetoresFormComponent } from './tipo-setores-form.component';

describe('TipoSetoresFormComponent', () => {
  let component: TipoSetoresFormComponent;
  let fixture: ComponentFixture<TipoSetoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSetoresFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoSetoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
