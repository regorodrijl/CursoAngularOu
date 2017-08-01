import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceleradorComponent } from './acelerador.component';

describe('AceleradorComponent', () => {
  let component: AceleradorComponent;
  let fixture: ComponentFixture<AceleradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceleradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceleradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
