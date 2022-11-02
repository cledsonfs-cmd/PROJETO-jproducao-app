import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProcessosFormComponent } from './sub-processos-form.component';

describe('SubProcessosFormComponent', () => {
  let component: SubProcessosFormComponent;
  let fixture: ComponentFixture<SubProcessosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubProcessosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubProcessosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
