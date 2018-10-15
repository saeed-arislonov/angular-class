import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService:  PostService) { }
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  ngOnInit() { }

  updatePost() {
    this.postService.updatePost(this.currentPost)
    .subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }

  addPost(title, body) {
    if (!title || !body) {
      alert('Please add Post');
    } else {
      console.log('click');
      this.postService.savePost({title, body} as Post)
        .subscribe(post => {
          console.log(post);
          this.newPost.emit(post);
        });
    }
  }

}
