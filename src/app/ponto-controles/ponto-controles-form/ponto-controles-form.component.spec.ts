import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontoControlesFormComponent } from './ponto-controles-form.component';

describe('PontoControlesFormComponent', () => {
  let component: PontoControlesFormComponent;
  let fixture: ComponentFixture<PontoControlesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PontoControlesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PontoControlesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
