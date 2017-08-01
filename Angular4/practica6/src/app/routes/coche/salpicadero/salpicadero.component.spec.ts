import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalpicaderoComponent } from './salpicadero.component';

describe('SalpicaderoComponent', () => {
  let component: SalpicaderoComponent;
  let fixture: ComponentFixture<SalpicaderoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalpicaderoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalpicaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
