import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { DataService } from 'src/app/services/data.service';
import { PostsService } from 'src/app/services/posts.service';
import { SearchPostPipe } from 'src/app/Pipes/search-post.pipe';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {
  filter:string='';

  posts: Post[] = [];
  constructor(private postservice:PostsService,
              private dataService:DataService,
              private router:Router) {


               }

  ngOnInit(): void {
    this.getPosts();
    this.dataService.postFilter$.subscribe(data=>
      {
        this.filter=data;
      });

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
