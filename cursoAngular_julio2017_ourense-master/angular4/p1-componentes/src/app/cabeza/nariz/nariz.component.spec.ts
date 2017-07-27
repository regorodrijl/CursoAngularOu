import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarizComponent } from './nariz.component';

describe('NarizComponent', () => {
  let component: NarizComponent;
  let fixture: ComponentFixture<NarizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
