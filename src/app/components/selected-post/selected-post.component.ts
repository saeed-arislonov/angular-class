import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.css']
})
export class SelectedPostComponent implements OnInit {
  post: Post;
  loading: boolean;
  isError: boolean;
  constructor(private route: ActivatedRoute, private postService:  PostService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.loading = true;
    this.isError = false;
    this.postService.getSinglePost(id).subscribe(post => {
      this.post = post;
      this.loading = false;
      this.isError = false;
    }, err => {
      this.loading = false;
      this.isError = true;
    });
  }

}
