import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private postFilter = new Subject<string>();

  postFilter$ = this.postFilter.asObservable();


  updatePostFilter(data: string) 
  {
    
    this.postFilter.next(data);
  }
  
  constructor() { }
}
