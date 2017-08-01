import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenoComponent } from './freno.component';

describe('FrenoComponent', () => {
  let component: FrenoComponent;
  let fixture: ComponentFixture<FrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
