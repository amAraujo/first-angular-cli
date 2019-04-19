import { CommentService } from './comment.service';
import { Comment } from './../models/comment.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments : Comment[];

  constructor(private commentsService: CommentService) { }

  ngOnInit() {
    this.commentsService.getComments().subscribe(comments => this.comments = comments);
  }

  
}
