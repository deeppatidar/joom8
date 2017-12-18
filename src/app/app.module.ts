import { CommonModule } from '@angular/common';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';


/* App Root */
import { AppComponent }   from './app.component';

/* Feature Modules */
import { HomeModule }    from './home/home.module';
import {CollectionModule} from './collection/collection.module';

import {HeaderModule} from './header/header.module'
import {FooterModule} from './footer/footer.module'

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    CollectionModule,
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
