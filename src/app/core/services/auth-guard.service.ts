import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './config.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private configService: ConfigService,
    private userService: UserService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    // if logged in
    if (this.userService.isAuthenticated) {
      return true;
      // If not logged in but we want to attempt to initialize the user information
      // due to APP_INITIALIZER based authentication happening
    } else if (!this.configService.config.useBasicAuth) {
      return this.userService.getCurrentUser().map((resp) => {
        if (resp.userId) {
          return true;
        }
      }).catch((e) => {
        this.router.navigate(['/login'], {
          replaceUrl: true,
          queryParams: {
            returnUrl: state.url,
          }
        });
        return Observable.of(false);
      });
    } else {
      this.router.navigate(['/login'],  {
        replaceUrl: true,
        queryParams: {
          returnUrl: state.url
        }
      });
      return false;
    }
  }
}
