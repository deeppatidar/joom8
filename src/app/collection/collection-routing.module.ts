import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CollectionComponent} from './collection.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'indore/collection', component :  CollectionComponent}
  ])],
  exports: [RouterModule]
})

export class CollectionRoutingModule {}
