import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsientoComponent } from './asiento.component';

describe('AsientoComponent', () => {
  let component: AsientoComponent;
  let fixture: ComponentFixture<AsientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
