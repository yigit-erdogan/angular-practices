import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HelperService } from './services/helper.service';
import { Helper2Service } from './services/helper2.service';
import { backend_url } from './consts';

let isProd:boolean=false;

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {provide:HelperService, useClass:isProd ? HelperService : Helper2Service},
    {provide:backend_url, useValue:'http://www.api.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
