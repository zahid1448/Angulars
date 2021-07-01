import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() myInput : string;
public data=" ";
  constructor() { }

  ngOnInit(): void {
    this.data=this.myInput;
  }
}

