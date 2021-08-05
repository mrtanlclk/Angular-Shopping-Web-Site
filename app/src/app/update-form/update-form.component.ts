import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService,
    private router:Router) { }
  updateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    valid: new FormControl(''),
    quantity: new FormControl('')   
  });
  title= "Product Update Form";


  ngOnInit(): void {
    this.productsService.getCurrentProducts(this.activatedRoute.snapshot.params.id).subscribe(data=>{
      this.updateForm = new FormGroup({
        id: new FormControl(data['id']),
        name: new FormControl(data['name']),
        price: new FormControl(data['price']),
        description: new FormControl(data["description"]),
        image: new FormControl(data['image']),
        valid: new FormControl(data['valid']),
        quantity: new FormControl(data['quantity'])    
      });
    })
  }

  updateProduct(){
    if(confirm("Are You Sure You Want To Update This Products?")){
      this.productsService.updateProducts(this.activatedRoute.snapshot.params.id, this.updateForm.value).subscribe(
        data=> {})
      alert("Product Updated!")
      this.router.navigateByUrl("/products")
    }
  }
}


