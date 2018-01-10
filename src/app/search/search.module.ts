import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchService} from './search.service';
import {ApplicationDirectives}  from '../shared/directives/application.directives';

import {ApplicationPipes} from '../shared/application.pipes';


@NgModule({
  imports:  [CommonModule, FormsModule, ReactiveFormsModule, ApplicationPipes, ApplicationDirectives],
  declarations: [SearchComponent],
  providers:  [SearchService],
  exports: [SearchComponent]
})
export class SearchModule { }
