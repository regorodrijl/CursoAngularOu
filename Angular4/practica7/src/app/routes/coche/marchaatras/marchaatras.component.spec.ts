import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchaatrasComponent } from './marchaatras.component';

describe('MarchaatrasComponent', () => {
  let component: MarchaatrasComponent;
  let fixture: ComponentFixture<MarchaatrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchaatrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchaatrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
