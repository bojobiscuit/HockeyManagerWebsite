import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtHistoryComponent } from './pt-history.component';

describe('PtHistoryComponent', () => {
  let component: PtHistoryComponent;
  let fixture: ComponentFixture<PtHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
