import { Comment } from './../models/comment.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }
  
  getComments() {
    return this.http.get<Comment[]>(this.url);    
  }
}
