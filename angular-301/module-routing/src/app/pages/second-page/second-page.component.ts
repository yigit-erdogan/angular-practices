import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent {

  constructor (private route:ActivatedRoute, private router:Router) {}

  ngOnInit(): void{

    let id=this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.route.paramMap.subscribe(x =>
    {
      console.log("Dynamic ID:"+x.get("id"));
    })

  }

  changeId()
  {
    this.router.navigate(["secondpage",10]);
  }

}
