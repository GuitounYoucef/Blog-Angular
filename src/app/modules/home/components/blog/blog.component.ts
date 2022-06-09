import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postservice:PostsService,private router:Router) { }

  ngOnInit(): void {
    this.getPosts();
  }
  private getPosts(){
    this.postservice.getPostsList().subscribe(data =>{
      this.posts = data;
    
    });
  }
  getPostById(id : number){   
      window.open('home/postdetail/'+id, '_blank');  
  }
}
