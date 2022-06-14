import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input('card-data') cardData!:Post;

  constructor() { }

  ngOnInit(): void {
  }

  getPostById(id : number){   
    window.open('home/postdetail/'+id, '_blank');  
}
}
