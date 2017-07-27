import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BocaComponent } from './boca.component';

describe('BocaComponent', () => {
  let component: BocaComponent;
  let fixture: ComponentFixture<BocaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BocaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
