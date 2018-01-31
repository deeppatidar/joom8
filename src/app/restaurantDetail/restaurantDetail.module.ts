import { NgModule }           from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgForage } from '@ngforage/ngforage-ng4';
import { RestaurantDetailRoutingModule } from './RestaurantDetail.routing';
import { RestaurantDetailComponent } from './restaurantDetail.component';
import { RestaurantInfoComponent }   from './restaurantInfo/info.component';
import { RestaurantMenuComponent }   from './menu/menu.component';
import { RestaurantReviewComponent }   from './review/review.component';
import { RestaurantDetailService } from './restaurantDetail.service';
import {CollectionService} from '../collection/collection.service';

import {localForageConfig} from '../configs/localForageConf';
import { JoomLocalStorageService } from '../shared/joomStorageLocal.service';

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [RestaurantDetailRoutingModule, CommonModule, BrowserModule, HttpModule, HeaderModule, FooterModule, localForageConfig],
  declarations: [RestaurantDetailComponent, RestaurantInfoComponent, RestaurantMenuComponent, RestaurantReviewComponent],
  providers: [RestaurantDetailService, JoomLocalStorageService, CollectionService]
})

export class RestaurantDetailModule {}
