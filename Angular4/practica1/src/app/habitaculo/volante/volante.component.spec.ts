import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolanteComponent } from './volante.component';

describe('VolanteComponent', () => {
  let component: VolanteComponent;
  let fixture: ComponentFixture<VolanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
