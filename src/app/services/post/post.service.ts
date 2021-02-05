import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/User';
import {Post} from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }
  getPostsByUserId(id: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url}?userId=${id}`);
  }
}

