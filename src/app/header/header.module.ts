import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import {HeaderService} from './header.service';
import {ApplicationDirectives}  from '../shared/directives/application.directives';
import {SearchModule} from '../search/search.module';
// import {SearchComponent} from '../search/search.component';

import {ApplicationPipes} from '../shared/application.pipes';


@NgModule({
  imports:  [CommonModule, FormsModule, ReactiveFormsModule, ApplicationPipes, ApplicationDirectives,SearchModule],
  declarations: [HeaderComponent],
  providers:  [HeaderService],
  exports: [HeaderComponent]
})
export class HeaderModule { }
