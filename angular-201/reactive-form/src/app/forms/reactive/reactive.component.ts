import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';
import { GenderRadioMenu } from 'src/app/models/gender-radio-menu';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  loginForm: FormGroup;
  countryMenu: CountryDropMenu[] = [{text:"Türkiye",value:1},{text:"Almanya",value:2},{text:"Fransa",value:3}]
  genderMenu: GenderRadioMenu[] = [{text:"Erkek",value:1},{text:"Kadın",value:2}]

  constructor(){
    this.loginForm = new FormGroup
    ({
      userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      rememberMe: new FormControl(false),
      country: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required, this.isOldEnough])
    })
  }

  signin()
  {
    console.log(this.loginForm.value);
  }

  isInValidMessageShow(FormControlName:string)
  {
    return this.loginForm.get(FormControlName)?.invalid && (this.loginForm.get(FormControlName)?.dirty || this.loginForm.get(FormControlName)?.touched)
  }

  isValid(FormControlName:string):boolean
  {
    let formControl=this.loginForm.get(FormControlName);

    if ( !(formControl?.invalid && (formControl.dirty || formControl.touched))) return false

    if (formControl.errors?.['required']) return true
    if (formControl.errors?.['minlength']) return true

    return true
  }

  isSuccesValid(FormControlName:string)
  {
    let formControl=this.loginForm.get(FormControlName);
    return formControl?.valid && (formControl.dirty || formControl.touched)
  }

  isOldEnough=(control:FormControl):{isYoung:true} | null =>
  {
    const birthDate = new Date(control.value);
    birthDate.setFullYear(birthDate.getFullYear()+18);
    return birthDate<new Date() ? null : {isYoung:true};
  }




}
