import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbalagensFormComponent } from './embalagens-form.component';

describe('EmbalagensFormComponent', () => {
  let component: EmbalagensFormComponent;
  let fixture: ComponentFixture<EmbalagensFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbalagensFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbalagensFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
