import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  constructor(private helperService:HelperService, private meta:Meta)
  {
    this.meta.addTag({name:"author", content:"yigit erdogan"});
    this.meta.addTag({name:"website", content:"www.google.com"});
    console.log(this.helperService.upper('angular second'));
  }

  show()
  {
    console.log(this.helperService.title);
  }

}
