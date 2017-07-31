import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'cat-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  @Input() public titulo:string;
  @Input() public empresa:any;

  constructor() { }

  ngOnInit() {
  }

}
