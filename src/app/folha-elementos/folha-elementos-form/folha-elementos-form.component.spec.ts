import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhaElementosFormComponent } from './folha-elementos-form.component';

describe('FolhaElementosFormComponent', () => {
  let component: FolhaElementosFormComponent;
  let fixture: ComponentFixture<FolhaElementosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolhaElementosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolhaElementosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
