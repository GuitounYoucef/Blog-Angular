import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {  Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseURL="http://localhost:8080/blog/posts";

  constructor(private httpClient:HttpClient) {} 
  getPostsList(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.baseURL}`);
  }

  createPost(post:Post): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,post);
  }

  getPostById(id:number): Observable<Post>{
    return this.httpClient.get<Post>(`${this.baseURL}/${id}`);
  }
  UpdatePost(post:Post): Observable<object>{
    return this.httpClient.put(`${this.baseURL}`,post);
  }    

  deletePost(postID:number): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${postID}`);
  } 

  
}
