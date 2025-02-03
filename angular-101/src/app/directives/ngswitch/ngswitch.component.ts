import { Component } from '@angular/core';
import { Product, Type } from 'src/app/models/product';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {

  product:Product;

  constructor()
  {
    this.product=new Product(1,"kalem 1",Type.Big)
  }

}
