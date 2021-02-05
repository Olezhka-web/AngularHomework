import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {UserService} from '../user/user.service';
import {PostService} from '../post/post.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]>{

  constructor(private postService: PostService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[]{
    return this.postService.getPostsByUserId(route.parent.params.id);
  }
}
