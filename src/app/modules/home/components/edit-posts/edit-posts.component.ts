import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';
import { AddpostComponent } from '../addpost/addpost.component';



@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})
export class EditPostsComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postservice:PostsService,private router:Router, private dialog: MatDialog) { }

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


  openDialog()
  {
    this.dialog.open(AddpostComponent, {
      width:'100%',
      height: '900px',
      autoFocus: false,

     
    }).afterClosed().subscribe(val =>{
      if(val==='save'){
        this.getPosts();
      }
    });
  }

  editPost(Data:any){
    this.dialog.open(AddpostComponent, {
      width:'100%',
      data:Data,
      height: '900px',
      autoFocus: false,
    }).afterClosed().subscribe(val =>{
      if(val==='update'){
        this.getPosts();
      }
    });
  }

  deletePost(id:number){
    console.log(id);
    if(confirm("Are you sure you want to delete this post")) {
      this.postservice.deletePost(id).subscribe(data=>{
        this.getPosts();
        alert("post deleted successfully ");
      });
    }  

  }
}
