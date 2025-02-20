import { Component, OnInit } from '@angular/core';
import { concatMap, defer, delay, distinct, filter, find, first, from, fromEvent, interval, last, map, mapTo, mergeMap, Observable, of, range, reduce, single, skip, skipUntil, skipWhile, switchMap, take, takeLast, takeWhile, timer, toArray } from 'rxjs';
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

    // reduce operator example
    // var numberArray = of(1,2,3,4,5);
    // numberArray.pipe(reduce((x,y)=>x+y)).subscribe(x=>{
    //   console.log(x);
    // })

    // toArray operator example
    // var stringArray = of("a","b","c","d");
    // stringArray.pipe(toArray()).subscribe(x=>console.log(x))

    // concatMap operator example
    // var stringArray = of("a","b","c","d");
    // var numberArray = of(1,2,3);

    // stringArray.pipe(concatMap(x=> numberArray.pipe(delay(5000),map(y=>x+y)))).subscribe(x=>{
    //   console.log(x)
    // })

    // switchMap operator example
    // const myclick = fromEvent(document,"click");

    // myclick.pipe(switchMap((x)=> timer(3000))).subscribe(x=>{
    //   console.log("Tıklama!");
    // })

    // mergeMap operator example
    // var stringArray = of("a","b","c","d");
    // var numberArray = of(1,2,3);

    // stringArray.pipe(mergeMap(x=> numberArray.pipe(map(y=>x+y)))).subscribe(x=>{
    //   console.log(x);
    // })


    // mapTo operator example
    // const click = fromEvent(document,"click");
    // click.pipe(mapTo("Clicklendi!")).subscribe(x=>{
    //    console.log(x);
    //  })

    // let information = from([
    //    {name:"ahmet",surname:"yıldırım",email:"ahmet@outlook.com"},
    //    {name:"mehmet",surname:"yılmaz",email:"mehmet@outlook.com"},
    //    {name:"ali",surname:"solmaz",email:"ali@outlook.com"},
    //    {name:"veli",surname:"sönmez",email:"veli@outlook.com"},
    //  ])
    // information.pipe(mapTo("sabit değer")).subscribe(x=>{
    //  console.log(x);
    // })

    // map operator example
    // let information = from([
    //  {name:"ahmet",surname:"yıldırım",email:"ahmet@outlook.com"},
    //  {name:"mehmet",surname:"yılmaz",email:"mehmet@outlook.com"},
    //  {name:"ali",surname:"solmaz",email:"ali@outlook.com"},
    //  {name:"veli",surname:"sönmez",email:"veli@outlook.com"},
    //])
    //  information.pipe(map(x=> `${x.name} ${x.surname} ${x.email}`)).subscribe(x=>{
    //    console.log(x);
    // })

    // take/takeLast/takeWhile operators example
    // const myArray = from([5,7,9,10,11,12,3,4,14])
    // myArray.pipe(takeWhile(x=>x<11)).subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log("Hata!"),
    //   complete:()=>console.log("Tamamlandı!")
    //   })
    // const myArray = from([5,7,9,10,11,12,14])
    // myArray.pipe(takeLast(3)).subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log("Hata!"),
    //   complete:()=>console.log("Tamamlandı!")
    //   })
    // const myArray = from([5,7,9,10,11,12,14])
    // myArray.pipe(take(3)).subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log("Hata!"),
    //   complete:()=>console.log("Tamamlandı!")
    //   })

    // skip/skipWhile/skipUntil operators example
    // const myArray = interval(1000);
    // myArray.pipe(skipUntil(timer(5000))).subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log("Hata!"),
    //   complete:()=>console.log("Tamamlandı!")
    //   })
    // const myArray = from([5,7,9,10,2,1,15,12,14])
    // myArray.pipe(skipWhile(x=>x<9)).subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log("Hata!"),
    //   complete:()=>console.log("Tamamlandı!")
    //   })
    // const myArray = from([5,7,9,10,11,12,14])
    // myArray.pipe(skip(4)).subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log("Hata!"),
    //   complete:()=>console.log("Tamamlandı!")
    //   })

    // distinct operator example
    // const myArray = from([5,7,9,10,10,10,11,12,14])
    // myArray.pipe(distinct()).subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log("Hata!"),
    //   complete:()=>console.log("Tamamlandı!")
    //   })

    // single operator example
    // const myArray = from([5,7,9,10,11,12,14])
    // myArray.pipe(single(x=>x>13)).subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log("Hata!"),
    //   complete:()=>console.log("Tamamlandı!")
    //   })

    // last operator example
    // const myArray = from([5,7,9,10,11,12,14])
    // myArray.pipe(last(x=>x>12)).subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log("Hata!"),
    //   complete:()=>console.log("Tamamlandı!")
    //   })
    
    // filter operator example
    // const myArray = from([5,7,9,10,11,12,14])
    // myArray.pipe(filter(x=>x>9)).subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log("Hata!"),
    //   complete:()=>console.log("Tamamlandı!")
    //   })

    // find operator example
    // const myArray = from([5,7,9,10,11,12,14])
    // myArray.pipe(find(x=>x>12)).subscribe({
    //   next:(val)=>console.log(val),
    //   error:(err)=>console.log("Hata!"),
    //   complete:()=>console.log("Tamamlandı!")
    //   })

    // first operator example
    // const myArray = from([5,7,9,10,11,12,14])
    //   myArray.pipe(first(x=>x>12)).subscribe({
    //     next:(val)=>console.log(val),
    //     error:(err)=>console.log("Hata!"),
    //     complete:()=>console.log("Tamamlandı!")
    //   })

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
