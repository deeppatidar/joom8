import { NgModule } from '@angular/core';

import {ClickOutsideDirective} from './dropdown.directive';
import {ClickOutside} from './clickoutside.directive';



@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [
    ClickOutsideDirective,ClickOutside
  ],
  exports: [
    ClickOutsideDirective,ClickOutside
  ]
})
export class ApplicationDirectives {}
