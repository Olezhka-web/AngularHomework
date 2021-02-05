import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {PostsComponent} from '../posts/posts.component';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  user: User;
  @Input()
  post: Post;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation().extras.state as User;
    });
  }

  ngOnInit(): void {
  }

  goToPosts(): void {
    this.router.navigate(['posts'], {relativeTo: this.activatedRoute});
  }
}
