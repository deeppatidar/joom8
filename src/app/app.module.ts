import { CommonModule } from '@angular/common';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {NgForageModule} from "@ngforage/ngforage-ng4";
/* App Root */
import { AppComponent }   from './app.component';
/* Feature Modules */
import { HomeModule }    from './home/home.module';
import {CollectionModule} from './collection/collection.module';
import {HeaderModule} from './header/header.module';
import {SearchModule} from './search/search.module';
import {FooterModule} from './footer/footer.module';
import {RestaurantDetailModule} from './restaurantDetail/restaurantDetail.module';
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgForageModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    CollectionModule,
    SearchModule,
    RestaurantDetailModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
