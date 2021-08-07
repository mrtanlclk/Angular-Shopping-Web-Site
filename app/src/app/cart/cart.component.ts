import { Component, OnInit } from '@angular/core';
import { Product } from '../products/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[Product]
})
export class CartComponent implements OnInit {
  
  title="SHOPPING CART";
  public products:any = [];
  public grandTotal!:number;
  total!:number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  //  this.cartService.getProduct().subscribe(res=>{
  //    this.products = res;
  //    this.grandTotal = this.cartService.getTotalPrice();
  //  })
   this.cartService.numOfItems.subscribe(data=>{
     this.products = data;

     if(this.products) this.getTotal(this.products);
   })
  }
  // removeItem(product:Product){
  //   this.cartService.removeCartItem(product);
  //   this.cartService.setData(product);
  // }
  removeItem(i:number){
    this.products.splice(i,1);
    this.cartService.setData(this.products);
  }
  // emptyCart(){
  //   this.cartService.removeAll();
  // }
  validateInput(event:any, i:number){
    const quantity = +event.target.value;
    if(quantity < 1){
      event.target.value = this.products[i].quantity
      return;
    }
    this.QtyUpdated(quantity,i)
  }
  private QtyUpdated(quantity:number, i:number){
    this.products[i].quantity = quantity;

    this.getTotal(this.products);

  }

  getTotal(data:any){
    let subs= 0;
    
    for(const item of data){
      subs += item.price * item.quantity;

      this.total = subs;
    }
  }
  emptyCart(){
    this.cartService.removeAll()
  }
}
