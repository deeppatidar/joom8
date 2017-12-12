import { NgModule }           from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent }     from './home.component';
import { HomeService }     from './home.service';
import { ConfigService} from '../shared/config.service';
import { ClickOutsideDirective }  from '../shared/directives/dropdown.directive';

import { LetterBoldPipe } from '../shared/letter-bold.pipe';
import { SearchFilterPipe } from '../shared/filter-pipe';


@NgModule({
  imports:  [HomeRoutingModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [HomeComponent, ClickOutsideDirective, LetterBoldPipe, SearchFilterPipe],
  providers:  [ HomeService, ConfigService]
})
export class HomeModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
