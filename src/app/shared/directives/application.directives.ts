import { NgModule } from '@angular/core';

import {ClickOutsideDirective} from './dropdown.directive';



@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [
    ClickOutsideDirective
  ],
  exports: [
    ClickOutsideDirective
  ]
})
export class ApplicationDirectives {}
