import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazoComponent } from './brazo.component';

describe('BrazoComponent', () => {
  let component: BrazoComponent;
  let fixture: ComponentFixture<BrazoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrazoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
