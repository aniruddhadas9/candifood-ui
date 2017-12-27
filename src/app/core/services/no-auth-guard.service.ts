import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './config.service';
import { UserService } from './user.service';

@Injectable()
export class NoAuthGuardService implements CanActivate {
  constructor(private configService: ConfigService,
    private currentUserService: UserService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.configService.config.useBasicAuth) {
      return true;
    } else {
      this.router.navigate(['/'], {
        replaceUrl: true,
      });
      return false;
    }
  }
}
