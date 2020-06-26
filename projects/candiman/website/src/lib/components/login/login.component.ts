import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {AlertService} from '../../services/alert/alert.service';

@Component({
  selector: 'cfs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading = false;
  public loginForm: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public returnUrl: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private router: Router,
    private userService: UserService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];

  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.userService.login({email: this.loginForm.value.username, password: this.loginForm.value.password})
        .subscribe((response) => {
          // navigate by url is used due to the fact that the returnUrl may have optional params which need to be parsed.
          // same is true for query params
          if (response !== null) {
            this.router.navigate([this.returnUrl || ''], {replaceUrl: true});
          } else {
            /*this.alertService.alert({
              title: 'Login failure!',
              subTitle: 'Unable to login! Please try again or contact support team.',
              text: response,
              type: 'danger',
              closeDelay: 10
            });*/
          }
        }, (error) => {
          // mostly this is never execute as error are handled in login service in catchError blocked and converted to obwervable
          console.log('LoginComponent|login|error:%o', error);
        });
    }
  }

}
