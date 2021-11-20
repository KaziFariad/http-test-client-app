import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  posts: Observable<any>;
  newPost: Observable<any>;
  title = 'Checking';
  constructor(private httpclient: HttpClient) {}

  getPosts() {
    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token');
    this.posts = this.httpclient.get(this.ROOT_URL + '/posts', {
      params,
      headers,
    });
    console.log(Object.keys(this.posts).length);
  }

  createPost() {
    const data: Post = {
      id: null,
      userId: 24,
      title: 'Styel',
      body: 'esta yeeel',
    };
    this.newPost = this.httpclient.post(this.ROOT_URL + '/posts', data);
  }
}
