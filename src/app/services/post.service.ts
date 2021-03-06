import { Injectable } from '@angular/core';

import { Post } from '../models/post.model';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class PostService {

  postsUrl: any = 'https://jsonplaceholder.typicode.com/posts';
  constructor( private http: HttpClient ) { }

    getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.postsUrl);
    }

    savePost(post: Post): Observable<Post> {
      return this.http.post<Post>(this.postsUrl, post, httpOptions);
    }

    updatePost(post: Post): Observable<Post> {
      const url = `${this.postsUrl}/${post.id}`;
      return this.http.put<Post>(url, post, httpOptions);
    }

    removePost(post: Post): Observable<Post> {
      const id = post.id;
      const url = `${this.postsUrl}/${id}`;
      return this.http.delete<Post>(url, httpOptions);
    }

    getSinglePost(id: any) {
      const url = `${this.postsUrl}/${id}`;
      return this.http.get<Post>(url);
    }


}
