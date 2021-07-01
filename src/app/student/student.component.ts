import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  dotsh:any;
    hoverIndex:number = -1;
    groups:any;
    test:any;
 constructor(private formBuilder: FormBuilder) {


     }
     onHover(i:number){
 this.hoverIndex = i;
}
     columns = ["name", "Items","status"];



  ngOnInit() {
      this.test = false;
      this.groups=[{"id":1,"name":"pencils","items":"red pencil","Status":[{"id":1,"name":"green"},{"id":2,"name":"red"},{"id":3,"name":"yellow"}],"loc":[{"id":1,"name":"loc 1"},{"id":2,"name":"loc 2"},{"id":3,"name":"loc 3"}]},{"id":2,"name":"rubbers","items":"big rubber","Status":[{"id":1,"name":"green"},{"id":2,"name":"red"}],"loc":[{"id":1,"name":"loc 2"},{"id":2,"name":"loc 3"}]},{"id":3,"name":"rubbers1","items":"big rubber1","Status":[{"id":1,"name":"green"}],"loc":[{"id":1,"name":"loc 2"},{"id":2,"name":"loc 3"}]}];





} 

}
