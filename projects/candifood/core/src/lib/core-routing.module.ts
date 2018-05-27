import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PrivacyComponent} from './components/privacy/privacy.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes/*, { enableTracing: true }*/)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {
}
