import { NgModule }           from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent }     from './home.component';
import { HomeService }     from './home.service';
import { ConfigService} from '../shared/config.service';
import { ApplicationDirectives }  from '../shared/directives/application.directives';

import {ApplicationPipes} from '../shared/application.pipes';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports:  [HomeRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, ApplicationPipes, ApplicationDirectives, FooterModule],
  declarations: [HomeComponent],
  providers:  [ HomeService, ConfigService]
})
export class HomeModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
