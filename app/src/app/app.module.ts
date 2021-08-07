import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './login/login.guard';
import { ProductsComponent } from './products/products.component';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { Dashboard } from './dashboard/dashboard';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CartComponent } from './cart/cart.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TableModule } from 'primeng/table';
import { UpdateFormComponent } from './update-form/update-form.component';
import { FilterPipe } from './products/filter.pipe';
import { BadgeModule } from 'primeng/badge';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductsComponent,
    ProductListComponent,
    ProductInfoComponent,
    CartComponent,
    AddFormComponent,
    UpdateFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MessageModule,
    MessageModule,
    SplitterModule,
    CardModule,
    TableModule,
    FormsModule,
    BadgeModule

  ],
  providers: [LoginService, LoginGuard, HttpClientModule, Dashboard],
  bootstrap: [AppComponent]
})
export class AppModule { }
