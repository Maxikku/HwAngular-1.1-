import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  constructor(private postService: PostService) { 
    this.postService.getPosts().subscribe(posts => {
     
      this.posts = posts;
    })

  }

  ngOnInit(): void {
  }

}
