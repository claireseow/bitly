import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortpageComponent } from './shortpage.component';

describe('ShortpageComponent', () => {
  let component: ShortpageComponent;
  let fixture: ComponentFixture<ShortpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
