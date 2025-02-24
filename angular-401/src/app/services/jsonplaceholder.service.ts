import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http:HttpClient) { 
  }

  getPostList()
  {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id:number)
  {

    var queryParams = new HttpParams({
      fromString:'name=ahmet&age=23'
    })


    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`,
     {params:queryParams})
  }

  // getPost(id:number)
  // {

  // const customHeader = new HttpHeaders({
  //   'Content-Type':'application/json',
  //   'Authorization':'Bearer my jwt'
  // })
  
  //   return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`,
  //   {observe:'response', headers:customHeader})
  // }

  // {
  //   return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(catchError
  //     (e=>{
  //       throw new Error("Data bulunamadi!")
  //     })
  //   );
  // }

}



