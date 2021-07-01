// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-http',
//   templateUrl: './http.component.html',
//   styleUrls: ['./http.component.css']
// })
// export class HttpComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
 
})
export class HttpComponent implements OnInit {
public postData:any[]=[];
fakeApiURL="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }
//get or read http get method
  ngOnInit(): void {
this.http.get<any>(this.fakeApiURL).subscribe((posts) =>{
  this.postData=posts;
});
  }
  //http create post method
  createPost(input){
    let body={title:input.value};
    this.http.post<any>(this.fakeApiURL,body).subscribe((post) =>{
      this.postData.splice(0,0,post);
    });
  }
  removeTitle(post){
    this.http.delete<any>(`${this.fakeApiURL}/${post.id}`).subscribe((_) =>{
      console.log(post);
     let index=this.postData.indexOf(post);
    this.postData.splice(index,1);
    });
  }
   updatePost(post)
  {
     this.http.put<any>(`${this.fakeApiURL}/${post.id}`, post).subscribe((update) =>{
       console.log(update);
       let index=this.postData.indexOf(update);
     this.postData.splice(index,1);
     });
  }
//   counter(i: number) {
//     return new Array(i);
// }

}