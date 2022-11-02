import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelasFormComponent } from './telas-form.component';

describe('TelasFormComponent', () => {
  let component: TelasFormComponent;
  let fixture: ComponentFixture<TelasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
