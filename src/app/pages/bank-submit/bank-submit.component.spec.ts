import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSubmitComponent } from './bank-submit.component';

describe('BankSubmitComponent', () => {
  let component: BankSubmitComponent;
  let fixture: ComponentFixture<BankSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
