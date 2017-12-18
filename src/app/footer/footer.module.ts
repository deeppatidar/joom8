import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer.component';
import {FooterService} from './footer.service';
import {ApplicationDirectives}  from '../shared/directives/application.directives';

import {ApplicationPipes} from '../shared/application.pipes';


@NgModule({
  imports:  [CommonModule, FormsModule, ReactiveFormsModule, ApplicationPipes, ApplicationDirectives],
  declarations: [FooterComponent],
  providers:  [FooterService],
  exports: [FooterComponent]
})
export class FooterModule { }
