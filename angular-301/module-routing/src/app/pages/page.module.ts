import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageServiceService } from './page-service.service';



@NgModule({
  declarations: [
    FirstPageComponent,
    SecondPageComponent,
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
