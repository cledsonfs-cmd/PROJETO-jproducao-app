import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantesFormComponent } from './representantes-form.component';

describe('RepresentantesFormComponent', () => {
  let component: RepresentantesFormComponent;
  let fixture: ComponentFixture<RepresentantesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentantesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepresentantesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
