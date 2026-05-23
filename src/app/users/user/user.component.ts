import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnDestroy{
  //user?: {id: number, name: string};
  user:any={};
  parmSubscription?:Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.parmSubscription = this.route.params.subscribe((params: any) => {
      this.user.id = params.id;
      this.user.name = params.name;
    });
  }

  ngOnDestroy() {
    if (this.parmSubscription) {
      this.parmSubscription?.unsubscribe();
    }
  }
}
