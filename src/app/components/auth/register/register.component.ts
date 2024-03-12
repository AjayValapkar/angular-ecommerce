import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  customer: Customer={
    customerId: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    address: []
  }

  constructor(private http: HttpClient, private router: Router) { }

  register() {
    let registerData = {
      "firstname": this.customer.firstname,
      "lastname": this.customer.lastname,
      "email": this.customer.email,
      "password": this.customer.password
    };

    this.http.post('http://localhost:8080/api/customer/register', registerData)
      .pipe(
        catchError(error => {
          this.router.navigate(['/api/customer/login'])
          console.error("Registration failed:", error);
          return throwError(() => new Error('Registration failed'));
        })
      )
      .subscribe(
        (resultData: any) => {
          if (typeof resultData === 'string' && resultData.startsWith('User successfully registered')) {
            console.log(resultData);
          }
        }
      );
  }
}
