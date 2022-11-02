import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessosFormComponent } from './acessos-form.component';

describe('AcessosFormComponent', () => {
  let component: AcessosFormComponent;
  let fixture: ComponentFixture<AcessosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
