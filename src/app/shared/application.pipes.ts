import { NgModule } from '@angular/core';

import {SearchFilterPipe} from './filter-pipe';
import  {LetterBoldPipe} from './letter-bold.pipe';


@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [
    SearchFilterPipe,LetterBoldPipe
  ],
  exports: [
    SearchFilterPipe,LetterBoldPipe
  ]
})
export class ApplicationPipes {}
