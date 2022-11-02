import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotesFormComponent } from './lotes-form.component';

describe('LotesFormComponent', () => {
  let component: LotesFormComponent;
  let fixture: ComponentFixture<LotesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
