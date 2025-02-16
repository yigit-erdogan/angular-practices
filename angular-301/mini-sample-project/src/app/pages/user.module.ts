import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './nav/header/header.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LeftMenuComponent } from './menu/left-menu/left-menu.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    HeaderComponent,
    LayoutComponent,
    LeftMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    HeaderComponent,
  ]
})
export class PageModule { }
