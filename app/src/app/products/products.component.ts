import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from './products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient, private productService: ProductsService) { }

  title = "Products"
  products: Product[] = [];
  term = ""

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
   
  }
  
  delete(id: number) {
    if (confirm("Are You Sure You Want To Delete This Product?")) {
      this.productService.deleteProducts(id).subscribe(
        () => { })
      alert("Product Deleted!")
      window.location.reload()
    }

  }


  // delete(id: number){
  //   confirm() 
  //   console.log("asfasdf")
  //     this.confirmationService.confirm({
  //         message: 'Are you sure that you want to perform this action?',
  //         accept: () => {
  //           this.productService.deleteProducts(id).subscribe(
  //             () => { })
  //         }
  //     });
      
     
  // }
  
  
  




}

