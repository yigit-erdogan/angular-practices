import { Component } from '@angular/core';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  price:number=1250;
  myDate=new Date();
  person1:Person= {firstName:"ahmet",lastName:"yıldız",age:23}
  person2:any= {first:'hasan',last:'aydın',age:40}

}




interface Person
{
  firstName:string,
  lastName:string,
  age:number
}