import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: "root",
})
export class FakeapiService {
  fakeApiURL="https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {}
  getPost()
  {
    return this.http.get<any>(this.fakeApiURL);
  }
createPost(input){
  let body={title: input.value };
  return this.http.post<any>(this.fakeApiURL, body);
}
}
