import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../products/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // public cartItemList: Product[]=[];
  public productList = new BehaviorSubject<any>([]);
  cartItems:Product[] = [];
  numOfItems = new BehaviorSubject<any>([]);
  // placeholder:any;
  // cartItems = new BehaviorSubject([]);

  constructor() {
    const ls = JSON.parse(localStorage.getItem('cart') || '{}');
    if(ls) this.numOfItems.next(ls)
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

      
    let exist = this.cartItems.find((item)=>{
      return item.id == product.id;
    });
    if(exist){
      exist.quantity++;
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
    else
      this.cartItems.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      this.numOfItems.next(this.cartItems)
      console.log("cartitems =>")
      console.log(this.cartItems)
    
    // const ls = JSON.parse(localStorage.getItem('cart') || '{}');
    
    // let exist = this.cartItems.find((x)=> {
    //    return x.id == product.id
    // });
    
    // if(exist){
    //   exist.quantity++;
    //   localStorage.setItem('cart', JSON.stringify(this.cartItems))
    //   console.log(exist.quantity)
    // }
      
    // else{
      
    //   if(ls){
        // const newData = [...ls, product];
        // localStorage.setItem('cart', JSON.stringify(newData));
        // this.numOfItems.next(JSON.parse(localStorage.getItem('cart') || '{}'))
      // }
      // else{
        // this.cartItems.push(product);
        // localStorage.setItem('cart', JSON.stringify(this.cartItems));
        // this.numOfItems.next(this.cartItems);
    //   }
      
    
    // }
  }
  // getTotalPrice():number{
  //   let grandTotal = 0;
  //   this.cartItems.map((a:any)=>{
  //   grandTotal += a.total;
  // })
  //   return grandTotal
  // }
  // removeCartItem(product:Product){
  //   this.cartItems.map((a:Product, index:number)=>{
  //     if(product.id === a.id){
  //       this.cartItems.splice(index, 1);
  //     }
  //   })
    
  //   this.numOfItems.next(this.cartItemList)
    
  //   console.log(this.productList)
  // }

  removeAll(){
    this.cartItems = [];
    this.numOfItems.next(this.cartItems);
    localStorage.clear();
    
  }
  setData(data:any){
    localStorage.setItem('cart', JSON.stringify(data))
  }
  
}
