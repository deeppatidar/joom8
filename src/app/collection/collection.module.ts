import {NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';


import {CollectionRoutingModule} from './collection-routing.module';
import {CollectionComponent} from './collection.component';
import {CollectionService} from './collection.service';

@NgModule({
  imports:      [CollectionRoutingModule, HttpModule, CommonModule, BrowserModule],
  declarations: [CollectionComponent],
  providers:    [CollectionService]
})
export class CollectionModule { }
