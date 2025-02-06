import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  loginModel: loginModel;
  countryMenu: countryDropMenu[] = [{text:"Seçiniz",value:0},{text:"Türkiye",value:1},{text:"Almanya",value:2},{text:"Fransa",value:3}]
  genderMenu: genderRadioMenu[] = [{text:"Erkek",value:1},{text:"Kadın",value:2}]
  
  // loginModel2: loginModelC;
  constructor()
  {
    this.loginModel = { userName: "", password: "", rememberMe:false, country:0, gender:0}
    // this.loginModel2 = new loginModelC();
    
  }

  save(form:NgForm)
  {
    console.log(form.value);
  }

  countryChange(value:any)
  {
    console.log(value);
  }

  genderChange(value:any)
  {
    console.log(value);
  }

  manuelChange(value:any)
  {
    console.log(value);
  }

  isValid(model:FormControl):boolean
  {
    if ( !(model.invalid && (model.dirty || model.touched ||  model.errors?.['minlength'])) ) return false

    return true
  }

  isSuccesValid(model:FormControl):boolean
  {
    return model.valid && (model.dirty || model.touched ||  model.errors?.['minlength'])
  }

}

interface genderRadioMenu
{
  text:string,
  value:number
}

interface countryDropMenu
{
  text:string,
  value:number
}

interface loginModel
{
  userName:string,
  password:string,
  rememberMe: boolean,
  country:number,
  gender:number
}

class loginModelC
{
  userName?:string;
  password?:string;
  rememberMe?: boolean;

/*  constructor(userName:string,password:string,rememberMe:boolean)
  {
    this.userName=userName;
    this.password=password;
    this.rememberMe=rememberMe;
  }
*/

}