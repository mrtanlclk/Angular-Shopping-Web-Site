import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../products/products';
import { DashboardService } from '../services/dashboard.service';
import { ProductsService } from '../services/products.service';
import { Dashboard } from './dashboard';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient,
    private dashboardService: DashboardService,
    private productsService: ProductsService) { }

  title = "DASHBOARD"
  dashboard: Dashboard[] = [];
  product: Product[] = [];

  ngOnInit(): void {
    // this.http.get<Dashboard[]>("http://localhost:3000/dashboard").subscribe(data => {
    //   this.dashboard  = data;
    // })

    this.dashboardService.getDashboard().subscribe(data => {
      this.dashboard = data
    })

    this.productsService.getProducts().subscribe(data => {
      this.product = data
    })
  }

  validLenght() {
    let totalItems = 0;
    for (let count of this.product) {
      if (count.valid) {
        totalItems += 1
      }
    }
    return totalItems
  }
  
  invalidLenght() {
    let totalItems = 0;
    for (let count of this.product) {
      if (!count.valid) {
        totalItems += 1
      }
    }
    return totalItems
  }
}
