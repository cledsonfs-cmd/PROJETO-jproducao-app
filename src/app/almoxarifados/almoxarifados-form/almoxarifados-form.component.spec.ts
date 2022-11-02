import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmoxarifadosFormComponent } from './almoxarifados-form.component';

describe('AlmoxarifadosFormComponent', () => {
  let component: AlmoxarifadosFormComponent;
  let fixture: ComponentFixture<AlmoxarifadosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmoxarifadosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmoxarifadosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
