import { Component, Inject, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { backend_url } from 'src/app/consts';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(public helperService:HelperService, private title:Title, @Inject(backend_url) private url:string)
  {
    this.title.setTitle("Angular");
    this.helperService.SendSms("mesaj","555 555 55 55");
    console.log(this.url);
    console.log(this.helperService.upper('angular first'));
  }

  change()
  {
    this.helperService.title="Component A Title";
  }

}
