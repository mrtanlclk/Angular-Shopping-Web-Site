import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { Product } from '../products/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
  providers:[Product]
})
export class ProductInfoComponent implements OnInit {

  constructor(private productsService: ProductsService, private product: Product,private activatedRoute: ActivatedRoute) { }
  product_info: Product[] = [];
  title = "PRODUCT INFO"
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.productsService.getInfo(params["id"]).subscribe(data=>{
        this.product_info= data
      })
    })
  }

  

}
