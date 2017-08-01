import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MotorService } from './routes/motor.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'co-root',
  template: `
    {{ velocidad }}
    <co-coche></co-coche>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'co';
  public velocidad = 0;
  public velocidad$: Observable<number>;
  constructor(public motorService: MotorService) { }
  ngOnInit() {
    this.velocidad$ = this.motorService.getVelocidad$();
    this.motorService
      .getVelocidad$()
      .map( x => x * 0.6)
      .subscribe(velocidad => {
        if (this.velocidad <= velocidad) {
          this.velocidad = velocidad;
        }
      })
  }
}
