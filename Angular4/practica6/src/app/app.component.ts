import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { MotorService } from "./routes/coche/motor.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'cat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cat';
  public velocidad = 0;
  public velocidad$: Observable<number>;
  constructor(public motorService: MotorService) { }
  ngOnInit() {
    this.velocidad$ = this.motorService.getVelocidad$();
    this.motorService
      .getVelocidad$()
      .map(x => x * 0.6)
      .subscribe(velocidad => {
        if (this.velocidad <= velocidad) {
          this.velocidad = velocidad;
        }
      })
  }
}
