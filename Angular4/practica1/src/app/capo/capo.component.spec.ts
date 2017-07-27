import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapoComponent } from './capo.component';

describe('CapoComponent', () => {
  let component: CapoComponent;
  let fixture: ComponentFixture<CapoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
