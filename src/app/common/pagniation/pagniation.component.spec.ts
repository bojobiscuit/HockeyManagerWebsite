import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagniationComponent } from './pagniation.component';

describe('PagniationComponent', () => {
  let component: PagniationComponent;
  let fixture: ComponentFixture<PagniationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagniationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagniationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
