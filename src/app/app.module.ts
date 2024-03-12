import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { AboutComponent } from './components/shared/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { CartComponent } from './components/products/cart/cart.component';
import { CustomerProfileComponent } from './components/customer/customer-profile/customer-profile.component';
import { CustomerOrderComponent } from './components/customer/customer-order/customer-order.component';
import { CustomerCartComponent } from './components/customer/customer-cart/customer-cart.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ShippingAddressComponent } from './components/products/shipping-address/shipping-address.component';
import { DashboardComponent } from './components/customer/dashboard/dashboard.component';
import { ProfileComponent } from './components/customer/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    CustomerProfileComponent,
    CustomerOrderComponent,
    CustomerCartComponent,
    CustomerDetailComponent,
    ProductDetailsComponent,
    ShippingAddressComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
 ],
  providers: [HttpClient],        
  bootstrap: [AppComponent]
})
export class AppModule { }
