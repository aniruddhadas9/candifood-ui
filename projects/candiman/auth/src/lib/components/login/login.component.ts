import {Component, OnInit} from '@angular/core';
import {NbAuthResult, NbAuthSocialLink, NbLoginComponent} from '@nebular/auth';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'cfs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent implements OnInit {
  alive = true;

  socialLinks: NbAuthSocialLink[] = [
    {
      title: 'Google',
      url: 'https://accounts.google.com/o/oauth2/v2/auth',
      target: '_blank',
      icon: 'socicon-github',
    },
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/akveo/',
      target: '_blank',
      icon: 'socicon-facebook',
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/akveo_inc',
      target: '_blank',
      icon: 'socicon-twitter',
    },
  ];


  ngOnInit() {

    this.service.authenticate('google')
      .pipe(takeWhile(() => this.alive))
      .subscribe((authResult: NbAuthResult) => {
        console.log('Auth|login|authResult:%o', authResult);
        if (authResult.isSuccess()) {
          this.router.navigateByUrl('/nhfamily');
        }
      });

    this.service.onAuthenticationChange().subscribe((auth) => {
      console.log('Auth|login|auth:%o', auth);
    });

    this.service.getToken().subscribe((token) => {
      console.log('Auth|login|token:%o', token);
    });
  }

}
