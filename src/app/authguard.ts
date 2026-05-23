import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class Authguard implements CanActivate {

  constructor(private auth: Auth, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    MaybeAsync<GuardResult>{
        return this.auth.isAuthenticated().then(
          (authenticated: any) => {
            if (authenticated) {
              console.log('Authenticated!');
              return true;
            } else {
              console.log('Not authenticated!');
              this.router.navigate(['/']);
              return false;
            }
          }
        );
    }  
  }
