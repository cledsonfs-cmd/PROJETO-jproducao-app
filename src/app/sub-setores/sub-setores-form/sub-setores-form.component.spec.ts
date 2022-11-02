import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSetoresFormComponent } from './sub-setores-form.component';

describe('SubSetoresFormComponent', () => {
  let component: SubSetoresFormComponent;
  let fixture: ComponentFixture<SubSetoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSetoresFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSetoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
