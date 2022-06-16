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

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInterceptor } from 'src/app/Httpinterceptor/Httpinterceptor';
import { EditcardComponent } from './components/editcard/editcard.component';
import { SearchPostPipe } from 'src/app/Pipes/search-post.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { PasswordUpdateComponent } from './components/password-update/password-update.component';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    HomeComponent,
    AddpostComponent,
    NavbarComponent,
    BlogComponent,
    PostDetailComponent,
    PostCardComponent,
    EditPostsComponent,
    EditcardComponent,
    SearchPostPipe,
    PasswordUpdateComponent,
    
    
  
   
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
    FormsModule,
    NgxPaginationModule,
    MatDividerModule,
 
    MDBBootstrapModule.forRoot()



    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true}],
})
export class HomeModule { }
