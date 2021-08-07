import { JsonpClientBackend } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dashboard } from '../dashboard/dashboard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Product } from '../products/products';
import { DashboardService } from '../services/dashboard.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  providers: [ProductsService, Product]
})
export class AddFormComponent implements OnInit {

  // @Input()FormControl:control

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService,
    private router: Router) { }
  addForm!: FormGroup;
  product: Product = new Product();
  title = "Products Add Form"
  dashboard: Dashboard[] = [];

  createProduct() {
    this.addForm = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      price: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.required],
      valid: ["", Validators.required],
      quantity: ["1", Validators.required]
    })
  }

  ngOnInit(): void {
    this.createProduct();
  }

  add() {
    this.product = Object.assign({}, this.addForm.value)
    this.productsService.addProduct(this.product).subscribe(data =>{
      this.product = data
    })
    alert("Product Added!")
    this.router.navigateByUrl("/products")
  }

}
