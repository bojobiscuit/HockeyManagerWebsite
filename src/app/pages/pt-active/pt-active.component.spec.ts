import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtActiveComponent } from './pt-active.component';

describe('PtActiveComponent', () => {
  let component: PtActiveComponent;
  let fixture: ComponentFixture<PtActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
