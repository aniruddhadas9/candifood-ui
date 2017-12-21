import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DisplayRestaurantComponent} from './restaurant/components/display-restaurant/display-restaurant.component';
import {LoginComponent} from './core/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayRestaurantComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
