import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-freno',
  templateUrl: './freno.component.html',
  styleUrls: ['./freno.component.css']
})
export class FrenoComponent implements OnInit {

  @Output() frenar:EventEmitter<void> = new EventEmitter<void>();

  frenarFunction(){
    this.frenar.emit();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
