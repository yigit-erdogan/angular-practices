import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultipleSubscribersService {

myObserVable: Observable<string>;

  constructor() {

    this.myObserVable = new Observable<string>(data=>{

      data.next("Ahmet");
      data.next("Mehmet");
      data.complete();

    })

   }
}
