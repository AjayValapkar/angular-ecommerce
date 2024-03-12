import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }

  setUser(user: Customer) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  setCustomer(user: Product) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUser(): Customer | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
  getCust(): Product | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  loginUser(email: string, password: string) {
    let loginInput = {
      "email": email,
      "password": password
    };

    return this.http.post("http://localhost:8080/api/customer/login", loginInput, { responseType: 'text' })
      .pipe(
        catchError(error => {
          console.error("Login failed:", error);
          return throwError(() => new Error('Login failed'));
        })
      );
  }

  getCustomer(email: string | undefined):Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:8080/api/customer'+email)
  }
}
