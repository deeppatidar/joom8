import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { CollectionInterface } from '../shared/collectionInterface';
import { ConfigService } from '../shared/config.service';
import { Collection} from '../model/collection';
import { City} from '../model/city';
import {HeaderService} from '../header/header.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {
    showDropDown : boolean = false;
    cusineDropDown : boolean = false;
    stateForm: FormGroup;
    cityData : City;
    cityId : number;
    cityName : string;
    public collections : Collection[] = [];
    states = ['Indore', 'Bhopal','Jaipur','Udaipur','Pune','Bangalore','Mumbai','Nagpur'];

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
      search: [null],
      keywords_input: [null]
    })
  }

  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  selectValue(value) {
   this.showDropDown = false;
   this.cityName = value;
   this.stateForm.patchValue({"search": value});
   this.headerService.getCityByCityName(value).subscribe((data) => {});
 }

  closeDropDown() {
    //this.showDropDown = !this.showDropDown;
  }
 openDropDown() {
   this.showDropDown = !this.showDropDown;
 }

  openCusineDropDown() {
      this.cusineDropDown = !this.cusineDropDown;
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }

  redirectToCollection() {
    var navigate = this.cityName+'/collections/featured';
    this.router.navigate([navigate]);
  }
 selectval(val) {
     this.stateForm.patchValue({"keywords_input": val});
     this.headerService.getCollectionByCusine(val,this.cityName,this.cityId).subscribe((data) => {
     this.router.navigate([this.cityName+'/'+val+"-in-"+this.cityName]);
     }
  );
    this.headerService.getCityCollection(this.cityId).subscribe(data => this.collections = data['collections']);
     this.cusineDropDown = !this.cusineDropDown;
 }
}
