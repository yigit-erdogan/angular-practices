import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';

const routes: Routes = [
  {path:'',redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage',component:HomePageComponent},
  {path:'firstpage',component:FirstPageComponent},
  {path:'secondpage/:id',component:SecondPageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
