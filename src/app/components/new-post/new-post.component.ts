import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService:  PostService) { }

  ngOnInit() {
  }

  addPost(title, body){
    if (!title || !body) {
      alert('Please add Post');
    } else {
      console.log('click')
      this.postService.savePost({title, body} as Post)
        .subscribe(post => {
          console.log(post);
        });
    }
  }

}
