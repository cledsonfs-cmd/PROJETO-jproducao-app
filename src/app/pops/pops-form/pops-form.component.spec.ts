import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopsFormComponent } from './pops-form.component';

describe('PopsFormComponent', () => {
  let component: PopsFormComponent;
  let fixture: ComponentFixture<PopsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
