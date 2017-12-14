import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit} from '@angular/core';


import {FooterService} from '../footer/footer.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: [ '../../assets/css/global.css' ]
})
export class FooterComponent {

  stateForm: FormGroup;


  constructor( private fb: FormBuilder, private footerService : FooterService, private router : Router, private route : ActivatedRoute) {

  }

  private ngOnInit() {


  }


}
