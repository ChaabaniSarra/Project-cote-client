import { Component } from '@angular/core';
import { product } from '../product'; 
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent   {

  private products: product = {
    id: 0,
    img: '',
    name: '',
    description: '',
     prix: 0,
  };

  constructor(private prodService: ProductsService) {}

  add() {
    this.prodService.addProduct(this.products).subscribe(
      res=> {
       console.log(res);

        this.products= {
          id: 0,
          img: '',
          name: '',
          description: '',
           prix: 0,
        }
        
      
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
