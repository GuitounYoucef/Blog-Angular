import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CKEditor5} from '@ckeditor/ckeditor5-angular';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';

import * as customBuild from 'src/app/Ckeditor/ckeditor5-build-classic-simple-upload-adapter-image-resize/build/ckeditor';
import { UrlImage } from 'src/app/models/UrlImage';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 









@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  selectedFile!: File;
  mainImageURL?:string;
  post!: Post;
  postForm !: FormGroup;
  imageLink?:string;
  formCaption = 'New Post'; 
  buttonCaption ='Save';
  buttonicon = 'save';


  constructor(private postservice:PostsService,
              private router:Router,
              private httpClient:HttpClient,
              private dialogRef: MatDialogRef<AddpostComponent>,
               @Inject(MAT_DIALOG_DATA) public editData: any,
              private formBuilder: FormBuilder, ) { }


  ngOnInit(): void {

    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      imageLink: ['', Validators.required],
      statement: ['', Validators.required],
      user_id: [''],
      id: [''],
    })    

    if (this.editData) {
      this.postForm.get('title')?.patchValue(this.editData.title);
      this.postForm.get('imageLink')?.patchValue(this.editData.imageLink);
      this.postForm.get('statement')?.patchValue(this.editData.statement);
      this.postForm.get('user_id')?.patchValue(this.editData.user_id);
      this.postForm.get('id')?.patchValue(this.editData.id);

      this.imageLink=this.editData.imageLink;
     }


}
 public Editor =  customBuild;

BACKEND_URLIMG:string = 'http://localhost:8080/image/uploadFile';
public html?:string;
 
 config: CKEditor5.Config = {
      image: {
      // image plugin config
      toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],
      styles: [
        'full',
        'alignLeft',
        'alignRight'
      ]
    },
    simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: this.BACKEND_URLIMG,
      // Headers sent along with the XMLHttpRequest to the upload server.

    },
    height:'5em',
  };

savePost(){
      
      this.postservice.createPost(this.postForm.value).subscribe(data =>
        {console.log(data);
          this.dialogRef.close('save');
           } 
        );
  }

  onSubmit(){
    this.savePost();
 
  }
  
  OnFileSelected(event:any){

    this.selectedFile= <File>event.target.files[0];
    this.imageLink=event.target.files[0];
    this.uploadMainImage();

  }
  uploadMainImage(){
    const imageFile=new FormData;
    imageFile.append("upload",this.selectedFile,this.selectedFile.name);
    this.httpClient.post<UrlImage>('http://localhost:8080/image/uploadFile',imageFile).
    subscribe((response) => {
      if (response.uploded===true) {
        this.postForm.get('imageLink')?.patchValue(response.url!);  
         this.imageLink=response.url!;
         console.log("image URL = "+this.post.imageLink); 
      } else {
        console.log('Image not uploaded successfully');
      }
    });
  }
  closeForm() {
    this.dialogRef.close('none');
  }

}
