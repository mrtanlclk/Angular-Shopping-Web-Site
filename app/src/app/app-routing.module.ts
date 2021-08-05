import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate:[LoginGuard]}, //, canActivate:[LoginGuard]},
  { path: 'products', component: ProductsComponent },
  { path: 'products-list', component: ProductListComponent },
  { path: 'products-list/selected-product/info/:id', component: ProductInfoComponent },
  { path: 'cart', component: CartComponent },
  { path: 'add-form', component: AddFormComponent },
  { path: 'update-form/:id', component: UpdateFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
