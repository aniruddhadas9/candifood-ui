import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/components/home/home.component';
import {RestaurantsComponent} from './restaurant/components/restaurants/restaurants.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'restaurant',
    component: RestaurantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, {enableTracing: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
