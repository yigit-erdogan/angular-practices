import { Component, OnInit } from '@angular/core';
import { defer, from, interval, Observable, of, range, timer } from 'rxjs';
import { MultipleSubscribersService } from './multiple-subscribers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor (private example:MultipleSubscribersService){

  }


  ngOnInit(): void {

    // from operator example
    // const map = new Map();
    // map.set(1,"kitap 1");
    // map.set(2,"kitap 2");
    // map.set(3,"kitap 3");

    // let values = from(map);
    // values.subscribe({
    //   next:(val)=>console.log(`key: ${val[0]}, value: ${val[1]}`),
    //   error:(err)=>console.log(err),
    //   complete:()=>console.log("Tamamlandı!")
    // })
    // let values2 = from([1,2,3,"ahmet",3.3]);
    // values2.subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log(err),
    //   complete:()=>console.log("Tamamlandı!")
    // })
    
    // defer operator example
    // let ofObservable = of(new Date());
    // let deferObservable = defer(() => of (new Date()));
    // let timerObservable = timer(5000);

    // timerObservable.subscribe
    // (x=>
    //   {
        
    //   ofObservable.subscribe({
    //     next:(val)=>console.log(`of: ${val}`),
    //     error:(err)=>console.log(err),
    //     complete:()=>console.log("Tamamlandı!")
    //   })
    
    //   deferObservable.subscribe({
    //     next:(val)=>console.log(`defer: ${val}`),
    //     error:(err)=>console.log(err),
    //     complete:()=>console.log("Tamamlandı!")
    //   })

    //   }
    // )


    // range operator example
    // let values = range(10,5);
    // values.subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log(err),
    //   complete:()=>console.log("Tamamlandı!")
    // })

    // timer operator example
    // let values = timer(3000,2000);
    // values.subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log(err),
    //   complete:()=>console.log("Tamamlandı!")
    // })

    // interval operator example
    // let values = interval(3000);
    // values.subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log(err),
    //   complete:()=>console.log("Tamamlandı!")
    // })

    // of operator example
    // let values = of("angular",2,[1,2,3],1.23)
    // values.subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log(err),
    //   complete:()=>console.log("Tamamlandı!")
    // })

    // this.example.myObserVable.subscribe({
    //   next(data){console.log(data)},
    //   error(err){console.log(err)},
    //   complete(){console.log("Data yayınlama sona erdi!")}
        
    // })

  }

}
