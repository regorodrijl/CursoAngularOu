import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroncoComponent } from './tronco.component';

describe('TroncoComponent', () => {
  let component: TroncoComponent;
  let fixture: ComponentFixture<TroncoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroncoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroncoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
