import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../products/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: Product[]=[];
  public productList = new BehaviorSubject<any>([]);
  cartItems:Product[] = [];
  numOfItems = new BehaviorSubject<any>([]);
  // placeholder:any;
  // cartItems = new BehaviorSubject([]);

  constructor() {
    // const ls = JSON.parse(localStorage.getItem('cart') || '{}');
    // if(ls) this.cartItems.next(ls)
  }

  getProduct(){
    return this.productList.asObservable();
  }

  addtoCart(product:Product){
    // this.cartItemList.push(product);
    // this.productList.next(this.cartItemList);
    // console.log(this.cartItemList)
    // localStorage.setItem("abc",JSON.stringify(this.cartItemList))
    // console.log(localStorage)

    const exist = this.cartItems.find((item)=>{
      return item.id === product.id;
    });
    if(exist)
      exist.quantity++;
    else
      this.cartItems.push(product);
      this.numOfItems.next(this.cartItems)
      console.log(this.cartItems)



    // const ls = JSON.parse(localStorage.getItem('cart') || '{}');


    // let exist: Product;

    // if(ls){}
    //   exist = ls.find((item)=>{
    //     return item.id === product.id;
    //   });
    
    // if(exist){
    //   exist.quantity++;
    //   localStorage.setItem('cart', JSON.stringify(ls))
    // }
      
    // else{
    //   if(ls){
    //     const newData = [...ls, product];
    //     localStorage.setItem('cart', JSON.stringify(newData));
    //     this.cartItems.next(JSON.parse(localStorage.getItem('cart') || '{}'))
    //   }
    //   else{
    //     this.placeholder.push(product);
    //     localStorage.setItem('cart', JSON.stringify(this.placeholder));
    //     this.cartItems.next(this.placeholder);
    //   }
    // }
  }
  getTotalPrice():number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
    grandTotal += a.total;
  })
    return grandTotal
  }
  // removeCartItem(product:Product){
  //   this.cartItemList.map((a:Product, index:number)=>{
  //     if(product.id === a.id){
  //       this.cartItemList.splice(index, 1);
  //     }
  //   })
  //   this.productList.next(this.cartItemList)
  //   localStorage.removeItem("lasf")
  //   console.log(this.productList)
  // }

  removeAll(){
    this.cartItems = [];
    this.numOfItems.next(this.cartItems);
  }
  
}
