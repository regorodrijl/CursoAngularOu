import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'co-salpicadero',
  templateUrl: './salpicadero.component.html',
  styleUrls: ['./salpicadero.component.css']
})
export class SalpicaderoComponent implements OnInit {

  @Input()
  velocidad;

  constructor() { }

  ngOnInit() {
  }

}
