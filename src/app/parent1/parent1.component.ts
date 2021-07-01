import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  inputText="I am parent component .I have to cumunicate with child";
  title="pipe";
  constructor() { }

  ngOnInit(): void {
  }

}
