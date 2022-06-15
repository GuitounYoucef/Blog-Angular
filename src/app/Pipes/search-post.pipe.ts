import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/Post';

@Pipe({
  name: 'searchPost'
})
export class SearchPostPipe implements PipeTransform {

  transform(value:Post[],postFilter:string){
    if(value.length===0 || postFilter==='')
    {
      return value;
    }
    const posts=[];
    for(const post of value)
    {
      if(post.title?.includes(postFilter))
      {
        posts.push(post)
      }
    }
    return posts;
  }

}
