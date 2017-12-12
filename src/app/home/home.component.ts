// Exact copy except import UserService from core
import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HomeService} from './home.service';
import { ConfigService} from '../shared/config.service';

import { Router } from '@angular/router';
import { City} from '../model/city';
import { Collection} from '../model/collection';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
  showDropDown : boolean = false;
  stateForm: FormGroup;
  cityData : City;
  cityId : number;
  cityName : string;
  public collections : Collection[] = [];
  states = ['India', 'Indore', 'Bhopla', 'Kota', 'Jaipur', 'Jodhpur', 'Ajmer', 'Udaipur', 'Bikaner', 'Alwar', 'Jaisalmer'];

  constructor( private fb: FormBuilder, private homeService : HomeService, private router : Router, private route : ActivatedRoute, private configService : ConfigService) {
    this.initForm()
  }

  private ngOnInit() {
    if(this.route.params) {
      this.route.params.subscribe(params => {
        this.cityName = params['city'] ? params['city'] : 'Indore';
        this.configService.setCityName(this.cityName);
        this.homeService.getCityByCityName(this.cityName).subscribe(data => {
            this.cityId = data['cityObj']['id'];
            this.configService.setCityId(this.cityId);
            this.homeService.getCityCollection(data['cityObj']['id']).subscribe(data => this.collections = data['collections']);
        }
        );
      });
    }

  }



  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    })
  }

  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  selectValue(value) {
   this.showDropDown = false;
   this.stateForm.patchValue({"search": value});
   this.homeService.getCityByCityName(value).subscribe((data) => this.router.navigate(['/home', data['cityObj'].name]));
 }

  closeDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  openDropDown() {
    this.showDropDown = false;
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }

  redirectToCollection() {
    var navigate = this.cityName+'/collections/featured';
    this.router.navigate([navigate]);
  }
}
