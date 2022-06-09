import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private postservice:PostsService, private router:Router,private activaterouter:ActivatedRoute) { }
  id? :number;
  post : Post =new Post();
  ngOnInit(): void {
    this.id=this.activaterouter.snapshot.params['id'] ;
    this.postservice.getPostById(this.id!).subscribe( data =>{
     this.post=data;
     let stat=document.querySelector('.statement');
     stat!.innerHTML=this.post.statement!;
    })    
  }

}
