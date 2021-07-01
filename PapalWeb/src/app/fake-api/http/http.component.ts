import { Component, OnInit } from '@angular/core';
import { FakeapiService } from './../../services/fakeapi.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
public postData: any[]= [];
  constructor(private fakeApi:FakeapiService) { }

  ngOnInit(): void {
this.fakeApi.getPost().subscribe((post) =>{
  this.postData=post;
});
  }
createPost(post)
{
this.fakeApi.createPost(post).subscribe((posts) =>{
  console.log(posts);
  this.postData.splice(0 ,0, posts);
});
}
}
