import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { CollectionInterface } from '../shared/collectionInterface';
import { ConfigService } from '../shared/config.service';
import { Collection} from '../model/collection';
import {HeaderService} from '../header/header.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {
  showDropDown : boolean = false;
  stateForm: FormGroup;
  cityData : City;
  cityId : number;
  cityName : string;
  public collections : Collection[] = [];
  states = ['India', 'Indore', 'Bhopla', 'Kota', 'Jaipur', 'Jodhpur', 'Ajmer', 'Udaipur', 'Bikaner', 'Alwar', 'Jaisalmer'];

  constructor( private fb: FormBuilder, private headerService : HeaderService, private router : Router, private route : ActivatedRoute, private configService : ConfigService) {
    this.initForm()
  }

  private ngOnInit() {
    if(this.route.params) {
      this.route.params.subscribe(params => {
        this.cityName = params['city'] ? params['city'] : 'Indore';
        this.configService.setCityName(this.cityName);
        this.headerService.getCityByCityName(this.cityName).subscribe(data => {
            this.cityId = data['cityObj']['id'];
            this.configService.setCityId(this.cityId);
            this.headerService.getCityCollection(data['cityObj']['id']).subscribe(data => this.collections = data['collections']);
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
   console.log(value);
   //this.headerService.getCityByCityName(value).subscribe((data) => this.router.navigate(['/home', data['cityObj'].name]));
 }

  closeDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  openDropDown() {
    this.showDropDown = true;
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }

  redirectToCollection() {
    var navigate = this.cityName+'/collections/featured';
    this.router.navigate([navigate]);
  }
}
