import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivoPerdasFormComponent } from './motivo-perdas-form.component';

describe('MotivoPerdasFormComponent', () => {
  let component: MotivoPerdasFormComponent;
  let fixture: ComponentFixture<MotivoPerdasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivoPerdasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivoPerdasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
