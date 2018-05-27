import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/components/home/home.component';
import {DisplayRestaurantComponent} from './restaurant/components/display-restaurant/display-restaurant.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayRestaurantComponent
  },
  {
    path: 'display-restaurant',
    component: DisplayRestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, {enableTracing: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
