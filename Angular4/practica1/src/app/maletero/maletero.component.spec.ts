import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleteroComponent } from './maletero.component';

describe('MaleteroComponent', () => {
  let component: MaleteroComponent;
  let fixture: ComponentFixture<MaleteroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaleteroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
