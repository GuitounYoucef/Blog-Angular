import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';
import { AddpostComponent } from '../addpost/addpost.component';

@Component({
  selector: 'app-editcard',
  templateUrl: './editcard.component.html',
  styleUrls: ['./editcard.component.css']
})
export class EditcardComponent implements OnInit {
  @Input('card-data') cardData!:Post;
  @Output('deleteAction') deleteAction:EventEmitter<number> = new EventEmitter();
  @Output('editAction') editAction:EventEmitter<Post> = new EventEmitter();

  constructor(private postservice:PostsService,
              private router:Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  editPost(){
        this.editAction.emit(this.cardData);
  }

  deletePost(id:number){
        this.deleteAction.emit(id);

  }
}
