import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiernaComponent } from './pierna.component';

describe('PiernaComponent', () => {
  let component: PiernaComponent;
  let fixture: ComponentFixture<PiernaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiernaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiernaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
