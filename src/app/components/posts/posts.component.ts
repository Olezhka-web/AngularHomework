import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  singlePost: Post;
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }
  getBubbleUp(post: Post): void{
    console.log(post);
    this.singlePost = post;
  }

}
