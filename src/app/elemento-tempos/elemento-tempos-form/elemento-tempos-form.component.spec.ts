import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoTemposFormComponent } from './elemento-tempos-form.component';

describe('ElementoTemposFormComponent', () => {
  let component: ElementoTemposFormComponent;
  let fixture: ComponentFixture<ElementoTemposFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoTemposFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementoTemposFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
