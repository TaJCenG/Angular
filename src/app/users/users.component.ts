import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Ramu'
    },
    {
      id: 2,
      name: 'Sita'
    },
    {
      id: 3,
      name: 'Ganesh'
    }
  ];
}
