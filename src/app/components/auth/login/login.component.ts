import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/core/authservice.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  customer: Customer={
    customerId: 0,
    firstname: '',
    lastname: '',
    email:'',
    password: '',
    confirmpassword: '',
    address: []
  }
  constructor(private authservice: AuthserviceService,private router: Router){
  }
  
  login() {
    this.authservice.loginUser(this.customer.email , this.customer.password)
      .subscribe(
        (resultData: any) => {
          if (typeof resultData === 'string' && resultData.startsWith('User successfully logged in')) {
            this.authservice.setUser(this.customer);
            console.log(this.customer);
            console.log("Login successful:", resultData);
            this.router.navigate(['/api/customer/account']);
          } else {
            console.log(this.customer);
            console.error("Login failed:", resultData);
          }
        }
      );
  }



}
