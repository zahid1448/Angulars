import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
topics: any =[];
users: any =[];
posts: any=[];
public gitUsers: any[]=[];
  constructor(public http:HttpClient) {

   }
  ngOnInit(): void {
console.log(this.gitUsers);
this.http.get<any> ("https://api.github.com/users").subscribe((users) =>
{
  this.gitUsers=users;} );
   }
  }
//   ngOnInit(): void {
//   this.http.get <any>("http://localhost:8080/topics").subscribe((user) =>{
//  this.topics=user;
//   });
//  }
//  }
// console.log("i am method");
// let userss='mani';
// console.log(userss);
// this.http.get ("https://jsonplaceholder.typicode.com/posts").subscribe((posts) =>{
//   this.posts=posts;
// });
//   }
// this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((users) =>{
// this.users=users;
// })
// }
// }
// callPromiseWay() {
//   window.fetch("https://jsonplaceholder.typicode.com/posts").then(data =>{
//     data.json().then(posts =>{
//       console.log(posts)
//     }).catch(err => console.log(err))
//   }).catch(err => console.log(err))
// }
//   }

