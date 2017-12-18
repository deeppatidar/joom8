import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CollectionComponent} from './collection.component';
import {FeaturedComponent} from './featured.component';
import {NetworkComponent} from './network.component';
import {BookmarkedComponent} from './bookmark.component';
import {MyCollectionComponent} from './mycollection.component';
import {CollectionDetailComponent} from './collectionDetail.component';

import {CollectionService} from './collection.service';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: ':cityName/collections',
      component: CollectionComponent,
      children: [
        {
          path: 'network',
          component: NetworkComponent,
        },
        {
          path: 'featured',
          component: FeaturedComponent,
          data : {cityId : 14}
        },
        {
          path: 'bookmarked',
          component: BookmarkedComponent,
        },
        {
          path: 'me',
          component: MyCollectionComponent,
        }
      ]
    },
    { path: ':cityName/:category', component: CollectionDetailComponent }

  ])],
  exports: [RouterModule]
})

export class CollectionRoutingModule {}
