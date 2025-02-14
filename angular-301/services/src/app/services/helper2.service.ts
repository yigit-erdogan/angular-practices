import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Helper2Service {

  constructor() { }

  upper(text:string)
  {
    return text.toUpperCase() + " upper v2";
  }

  SendSms(text:string,phone:string)
  {
    console.log("sahte sms gönderildi. (local)");
  }
}
