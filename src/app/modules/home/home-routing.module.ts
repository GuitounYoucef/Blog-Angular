import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './components/addpost/addpost.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditPostsComponent } from './components/edit-posts/edit-posts.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';






const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [

      { path: 'addpost', component: AddpostComponent },
      { path: 'editposts', component: EditPostsComponent},
      { path: 'blog', component: BlogComponent },
      { path: 'postdetail/:id', component: PostDetailComponent},

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
