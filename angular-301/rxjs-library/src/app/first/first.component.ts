import { Component } from '@angular/core';
import { MultipleSubscribersService } from '../multiple-subscribers.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private example:MultipleSubscribersService){}

  ngOnInit(): void{

    this.example.myObserVable.subscribe({

      next(data){console.log("First component "+data)},
      error(err){console.log(err)},
      complete(){console.log("First component data yayınlama sona erdi!")}
        

    })

  }

}
