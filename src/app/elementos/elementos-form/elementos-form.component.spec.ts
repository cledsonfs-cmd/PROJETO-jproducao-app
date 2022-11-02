import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosFormComponent } from './elementos-form.component';

describe('ElementosFormComponent', () => {
  let component: ElementosFormComponent;
  let fixture: ComponentFixture<ElementosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
