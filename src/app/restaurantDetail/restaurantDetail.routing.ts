import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { RestaurantDetailComponent }   from './restaurantDetail.component';
import { RestaurantInfoComponent }   from './restaurantInfo/info.component';
import { RestaurantMenuComponent }   from './menu/menu.component';
import { RestaurantReviewComponent }   from './review/review.component';

@NgModule({
  imports: [
      RouterModule.forChild([
      {
        path: ':cityName/restaurant/:restaurantId',
        component: RestaurantDetailComponent,
        children: [
          {
            path: 'detail',
            component: RestaurantInfoComponent
          },
          {
            path: 'menu',
            component: RestaurantMenuComponent
          },
          {
            path: 'review',
            component: RestaurantReviewComponent
          },
          {
            path: '',
            redirectTo: 'detail',
            pathMatch: 'full'
          }
        ]
      }

  ])],
  exports: [RouterModule]
})

export class RestaurantDetailRoutingModule {}
