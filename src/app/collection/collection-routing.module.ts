import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CollectionComponent} from './collection.component';
import {FeaturedComponent} from './featured.component';
import {NetworkComponent} from './network.component';
import {BookmarkedComponent} from './bookmark.component';

import {CollectionService} from './collection.service';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'indore/collections',
      component: CollectionComponent,
      children: [
        {
          path: 'network',
          component: NetworkComponent,
        },
        {
          path: 'featured',
          component: FeaturedComponent,
        },
        {
          path: 'bookmarked',
          component: BookmarkedComponent,
        }
      ]
    }
  ])],
  exports: [RouterModule]
})

export class CollectionRoutingModule {}
