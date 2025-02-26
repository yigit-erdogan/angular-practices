import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  post:Post | undefined;
  isLoadingShow:boolean=true;
  constructor(private jsonPlaceHolderService:JsonplaceholderService){}

  ngOnInit(): void {

    
   
    this.jsonPlaceHolderService.getPost(2).subscribe({
      next: (x) => {
        this.post=x
      },
      error: (e:Error) => {
        console.warn(`Hata: ${e.message}`);
        this.isLoadingShow = false;
      },
      complete: () => {
        this.isLoadingShow = false;
        console.log("istek tamamlandı!");
      }
    })

  }

}
