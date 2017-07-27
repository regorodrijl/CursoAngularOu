import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitaculoComponent } from './habitaculo.component';

describe('HabitaculoComponent', () => {
  let component: HabitaculoComponent;
  let fixture: ComponentFixture<HabitaculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitaculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitaculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
