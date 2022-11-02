import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoquesFormComponent } from './estoques-form.component';

describe('EstoquesFormComponent', () => {
  let component: EstoquesFormComponent;
  let fixture: ComponentFixture<EstoquesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoquesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoquesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
