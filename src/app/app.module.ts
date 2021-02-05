import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/resolve/user-resolve.service';
import { UserComponent } from './components/user/user.component';
import { FullUserComponent } from './components/full-user/full-user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {PostResolveService} from './services/resolve/post-resolve.service';

const routes: Routes = [
  {
    path: 'users', component : UsersComponent, resolve: {usersData: UserResolveService},
    children: [
      {path : ':id', component : FullUserComponent, children: [
          {path: 'posts', component: PostsComponent, resolve: {posts: PostResolveService}}
        ]}
    ]
    },
  {path: '', redirectTo: 'users', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent,
    PostsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
