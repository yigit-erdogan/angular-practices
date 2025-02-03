import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  names:string[]=["ali","ayşe","fatma"];

  userList:User[]=[];
User: any;

  constructor()
  {
    this.userList.push(new User(1,"ahmet","ahmet@outlok.com"));
    this.userList.push(new User(2,"mehmet","mehmett@outlok.com"));
    this.userList.push(new User(3,"ali","ali@outlok.com"));
  }

}
