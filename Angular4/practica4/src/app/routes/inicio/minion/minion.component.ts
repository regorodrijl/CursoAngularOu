import { Component, OnInit } from '@angular/core';
import { CompartirInfoService } from "../compartir-info.service";

@Component({
  selector: 'cat-minion',
  templateUrl: './minion.component.html',
  styleUrls: ['./minion.component.css']
})
export class MinionComponent implements OnInit {

  constructor(
    public compartirInfo: CompartirInfoService
  ) { }
  

  ngOnInit() {
    console.log("Valor Minion: ", this.compartirInfo.getEdad());
  }
}
