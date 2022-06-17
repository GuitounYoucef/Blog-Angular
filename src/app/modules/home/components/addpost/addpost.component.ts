import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {CKEditor5} from '@ckeditor/ckeditor5-angular';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';


import * as  ClassicEditor from 'src/app/Ckeditor/@haifahrul/ckeditor5-build-rich';


import { UrlImage } from 'src/app/models/UrlImage';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';



 









@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit, AfterViewInit {
  selectedFile!: File;
  mainImageURL?:string;
  post!: Post;
  postForm !: FormGroup;
  imageLink?:string;
  formCaption = 'New Post'; 
  buttonCaption ='Save';
  buttonicon = 'save';
  token?:string;
  config!: CKEditor5.Config;


  constructor(private postservice:PostsService,
              private router:Router,
              private httpClient:HttpClient,
              private dialogRef: MatDialogRef<AddpostComponent>,
               @Inject(MAT_DIALOG_DATA) public editData: any,
              private formBuilder: FormBuilder, 
              private $localStorage: LocalStorageService) { }

ngAfterViewInit(): void {
  
}              

  ngOnInit(): void {
    this.token = this.$localStorage.retrieve("authenticationToken");
    this.configuration();

    
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      cardContent: ['', Validators.required],
      imageLink: ['', Validators.required],
      statement: ['', Validators.required],
      user_id: [''],
      id: [''],
      ceationDate: [''],
    })    

    if (this.editData) 
    {
      this.postForm.get('title')?.patchValue(this.editData.title);
      this.postForm.get('cardContent')?.patchValue(this.editData.cardContent);
      this.postForm.get('imageLink')?.patchValue(this.editData.imageLink);
      this.postForm.get('statement')?.patchValue(this.editData.statement);
      this.postForm.get('user_id')?.patchValue(this.editData.user_id);
      this.postForm.get('id')?.patchValue(this.editData.id);
      this.postForm.get('ceationDate')?.patchValue(this.editData.ceationDate);
      this.imageLink=this.editData.imageLink;
     }


}
 public Editor =  ClassicEditor;

BACKEND_URLIMG:string = 'http://localhost:8080/image/uploadFile';
public html?:string;
 

configuration(){
 this.config = {
  toolbar: [
    'undo',
    'redo',
    '|',
    'heading',
    'fontFamily',
    'fontSize',
    '|',
    'bold',
    'italic',
    'underline',
    'fontColor',
    'fontBackgroundColor',
    'highlight',
    '|',
    'link',
    'CKFinder',
    'imageUpload',
    'mediaEmbed',
    '|',
    'alignment',
    'bulletedList',
    'numberedList',
    '|',
    'indent',
    'outdent',
    '|',
    'insertTable',
    'blockQuote',
    'specialCharacters'
  ],
  fontSize: {
    options: [12,13,14,15,16,17,18,19,20,21,22,23,24,]
},
  language: 'id',



  ckfinder: {
    openerMethod: 'modal',
    // The URL that the images are uploaded to.
    uploadUrl: this.BACKEND_URLIMG,
    

    // Headers sent along with the XMLHttpRequest to the upload server.
    headers:{
      
     Authorization: `Bearer ${this.token}`,
     method : "post",
    },

    },



 
  
};

}
createPost(){
      
      this.postservice.createPost(this.postForm.value).subscribe(data =>
        {console.log(data);
          this.dialogRef.close('save');
           } 
        );
  }

  updatePost(){
      
    this.postservice.UpdatePost(this.postForm.value).subscribe(data =>
      {console.log(data);
        this.dialogRef.close('update');
         } 
      );
}

  onSubmit(){
    if(this.postForm.valid)
    {
    if (!this.editData) {
    this.createPost();
    }
    else{
      this.updatePost();
    }
  }
  }
  
  OnFileSelected(event:any){

    this.selectedFile= <File>event.target.files[0];
    this.imageLink=event.target.files[0];
    this.uploadMainImage();

  }



  @ViewChild('myImage') image!: ElementRef
  uploadMainImage(){
    const imageFile=new FormData;
    imageFile.append("upload",this.selectedFile,this.selectedFile.name);
    
    this.httpClient.post<UrlImage>('http://localhost:8080/image/uploadFile',imageFile).
    subscribe((response) => {
      console.log("response = "+response.uploaded); 
      if (response.uploaded===1) {
        console.log("image URL = "+response.currentFolder?.url); 
       this.postForm.get('imageLink')?.patchValue(response.currentFolder?.url);  
       let url=response.currentFolder?.url;

         this.postservice.getImage(url!).subscribe(response => this.image.nativeElement.src = window.URL.createObjectURL(response))


         
      }
       else {
        console.log('Image not uploaded successfully');
      }
    });
  }

  closeForm() {
    this.dialogRef.close('none');
  }

}
