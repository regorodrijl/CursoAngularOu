import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OjoComponent } from './ojo.component';

describe('OjoComponent', () => {
  let component: OjoComponent;
  let fixture: ComponentFixture<OjoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OjoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OjoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
