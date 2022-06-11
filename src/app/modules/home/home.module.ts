import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { AddpostComponent } from './components/addpost/addpost.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './components/blog/blog.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

import { PostCardComponent } from './components/post-card/post-card.component';

import { EditPostsComponent } from './components/edit-posts/edit-posts.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    HomeComponent,
    AddpostComponent,
    NavbarComponent,
    BlogComponent,
    PostDetailComponent,
    PostCardComponent,
    EditPostsComponent
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    HomeRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MDBBootstrapModule.forRoot()



    
  ]
})
export class HomeModule { }