import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/customer/dashboard/dashboard.component';
import { CustomerCartComponent } from './components/customer/customer-cart/customer-cart.component';
import { CustomerDetailComponent } from './components/customer/customer-detail/customer-detail.component';
import { CustomerOrderComponent } from './components/customer/customer-order/customer-order.component';
import { CustomerProfileComponent } from './components/customer/customer-profile/customer-profile.component';
import { ProductComponent } from './components/products/product/product.component';
import { AboutComponent } from './components/shared/about/about.component';
import { ContactComponent } from './components/shared/contact/contact.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: '', component: HomeComponent },
  { path: "product", component: ProductComponent },
  { path: "products", component: ProductListComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "api/customer/login", component: LoginComponent },
  { path: "api/customer/register", component: RegisterComponent },
  {
    path: "api/customer/account", component: DashboardComponent, children: [
      { path: "", component: CustomerDetailComponent },
      { path: "cart", component: CustomerCartComponent },
      { path: "order", component: CustomerOrderComponent },
      { path: "address", component: CustomerProfileComponent }

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
