import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongpageComponent } from './longpage.component';

describe('LongpageComponent', () => {
  let component: LongpageComponent;
  let fixture: ComponentFixture<LongpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
