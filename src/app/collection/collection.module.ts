import {NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';


import {CollectionRoutingModule} from './collection-routing.module';
import {CollectionComponent} from './collection.component';

import {FeaturedComponent} from './featured.component';
import {NetworkComponent} from './network.component';
import {BookmarkedComponent} from './bookmark.component';
import {MyCollectionComponent} from './mycollection.component';
import {CollectionDetailComponent} from './collectionDetail.component';
import {CollectionService} from './collection.service';
import { ConfigService } from '../shared/config.service';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports:      [CollectionRoutingModule, HttpModule, CommonModule, BrowserModule, HeaderModule, FooterModule],
  declarations: [CollectionComponent, FeaturedComponent, NetworkComponent, BookmarkedComponent, MyCollectionComponent, CollectionDetailComponent],
  providers:    [CollectionService, ConfigService]
})
export class CollectionModule { }
