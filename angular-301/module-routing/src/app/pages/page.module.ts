import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageServiceService } from './page-service.service';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    FirstPageComponent,
    SecondPageComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    FirstPageComponent,
    SecondPageComponent,
  ],
  providers: [
    PageServiceService
  ]

})
export class PageModule { }
