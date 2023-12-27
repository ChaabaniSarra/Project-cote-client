import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  title = 'boutique';
  productsss = new Array<product>();

  constructor( private prodServices:ProductsService ) {
   // prodServices.get().subscribe(response => this.  productsss = response )
    }
}
