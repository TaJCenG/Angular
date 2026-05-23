import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router, private auth: Auth) { }

  loadProducts() {
    this.router.navigate(['/products']);
  }

  loadCustomers() {
    this.router.navigate(['/customers']);
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
