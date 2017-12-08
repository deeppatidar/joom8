import {NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';


import {CollectionRoutingModule} from './collection-routing.module';
import {CollectionComponent} from './collection.component';
import {FeaturedComponent} from './featured.component';
import {NetworkComponent} from './network.component';
import {BookmarkedComponent} from './bookmark.component';
import {CollectionService} from './collection.service';

@NgModule({
  imports:      [CollectionRoutingModule, HttpModule, CommonModule, BrowserModule],
  declarations: [CollectionComponent, FeaturedComponent, NetworkComponent, BookmarkedComponent],
  providers:    [CollectionService]
})
export class CollectionModule { }
