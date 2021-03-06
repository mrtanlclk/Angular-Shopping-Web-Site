import { Component, OnInit } from '@angular/core';
import { Product } from '../products/products';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [Product]
})
export class ProductListComponent implements OnInit {

  constructor(private products: Product, private productService: ProductsService,
    private cartService: CartService) { 
      
    }

  title = "VALID PRODUCTS LIST";
  product_list: Product[] = [];
  product_list2: Product[] = [];
  list = new BehaviorSubject([]);
  totalItem :number = 0;

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data =>{
      
      this.product_list = data
      for(let i of this.product_list){
        if(i.valid){
          this.product_list2.push(i)
        }
      }

      // this.product_list2.forEach((a:any)=>{
      //   Object.assign(a,{quantity:1,total:a.price});
      // })
    });
    console.log(localStorage.getItem('cart'))

    const ls = JSON.parse(localStorage.getItem('cart') || '{}');
    if(ls.length > 0){
      this.list.next(ls)
    }

    this.cartService.numOfItems.subscribe(res =>{
      this.totalItem = res.length;
    })
    
    
  }

  addtoCart(product:Product){
    this.cartService.addtoCart(product);
  }  
}
