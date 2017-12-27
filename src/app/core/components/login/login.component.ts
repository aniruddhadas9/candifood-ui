import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AlertService, DangerAlert } from '../../services/alert.service';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/finally';

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

  constructor(private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private router: Router,
    private userService: UserService) {
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
      this.userService.getCurrentUser(this.loginForm.value.username, this.loginForm.value.password)
        .finally(() => {
          this.loading = false;
        }).subscribe((response) => {
          // navigate by url is used due to the fact that the returnUrl may have optional params which need to be parsed.
          // same is true for query params
          this.router.navigateByUrl(this.returnUrl, { replaceUrl: true });
        }, (error) => {
          this.alertService.alert({
            title: 'Login failure!',
            subTitle: 'Unable to login! Please try again or contact support team.',
            text: error,
            type: 'danger'
          });
        });
    }
  }

}
