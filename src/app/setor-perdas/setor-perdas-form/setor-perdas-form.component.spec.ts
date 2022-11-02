import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorPerdasFormComponent } from './setor-perdas-form.component';

describe('SetorPerdasFormComponent', () => {
  let component: SetorPerdasFormComponent;
  let fixture: ComponentFixture<SetorPerdasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetorPerdasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetorPerdasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
