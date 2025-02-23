import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { User2 } from './models/user2';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demoProject';

  user:User | undefined;
  user2:User2 | undefined;
  postList:Post[]=[];

  constructor (private http:HttpClient){
  }

  ngOnInit(): void {

    this.http.get<User>('https://jsonplaceholder.typicode.com/todos/1').subscribe(x=>{
      this.user = x;
    })

    this.http.get<User2>('https://jsonplaceholder.typicode.com/todos/1').subscribe(x=>{
      this.user2 = x;
    })

    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(x=>{
      this.postList = x;
    })
    

    
  }

  



}
