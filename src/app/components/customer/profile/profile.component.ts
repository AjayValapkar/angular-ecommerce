import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/core/authservice.service';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user:Customer | null | undefined
  cust: Product | null | undefined
  customer: Product  = {
    customerId: 0,
    firstname: '',
    lastname: '',
    email: ''
  }

  constructor(private authservice: AuthserviceService) {
    // this.cust = this.authservice.getUser();
    // this
    //   .authservice
    //   .getCustomer(this.cust?.email).subscribe({
    //     next: user => {
    //       this.authservice.setCustomer(user);
    //     }
    //   })
   this.user= this.authservice.getUser()
   console.log(this.user)

  }


  //  dashboard(){
  //   this.user = this.authService.getUser();
  //   if (this.user && this.user.email) {
  //     this.postService.getUserByEmail(this.user.email).subscribe({
  //       next: user => {
  //         this.user = user;
  //         console.log(user)
  //         this.postService.getUserPosts(this.user.userId).subscribe({
  //           next: (posts: Post[]) => {
  //             this.posts = posts;
  //             console.log(posts)
  //           },
  //           error: error => {
  //             console.error('Error fetching user posts:', error);
  //           }
  //         });
  //       },
  //       error: error => {
  //         console.error('Error fetching user by email:', error);
  //       }
  //     });
  //   }
  //  }
}
