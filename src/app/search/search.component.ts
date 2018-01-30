import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigService} from '../shared/config.service';
import { Router } from '@angular/router';
import { City} from '../model/city';
import { Collection} from '../model/collection';
import { ActivatedRoute } from '@angular/router';
import {SearchService} from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

    showDropDown : boolean = false;
    cusineDropDown : boolean = false;
    searchLocationForm: FormGroup;
    cityData : City;
    cityId : number;
    cityName : string;
    public collections : Collection[] = [];
    public collectionslist : Collection[] = [];
    states = ['Indore', 'Bhopal','Jaipur','Udaipur','Pune','Bangalore','Mumbai','Nagpur'];

    constructor( private fb: FormBuilder, private searchService : SearchService, private router : Router, private route : ActivatedRoute, private configService : ConfigService) {
      this.initiliseSearchForm();
    }

    private ngOnInit() {
      if(this.route.params) {
        this.route.params.subscribe(params => {
          this.cityName = params['cityName'] ? params['cityName'] : 'Indore';

          this.searchLocationForm.patchValue({"searchLocation": this.cityName});

          this.configService.setCityName(this.cityName);
          this.searchService.getCityByCityName(this.cityName).subscribe(data => {
            this.cityId = data['cityObj']['id'];
            this.configService.setCityId(this.cityId);
            this.searchService.getCuisinesCollectionList(this.cityId).subscribe(data => {
                this.collectionslist = data['results']['restaurants'];
            });
            this.searchService.getCityCollection(data['cityObj']['id']).subscribe(data => {
                this.collections = data['collections']
            });
          });
        });
      }
    }

    initiliseSearchForm(): FormGroup {
      return this.searchLocationForm = this.fb.group({
         searchLocation: [null],
         category: [null]
      })
    }

    onLocationChange(value) {
       this.showDropDown = false;
       this.cusineDropDown = !this.cusineDropDown;
       this.cityName = value;
       this.searchLocationForm.patchValue({"searchLocation": value});
       this.searchService.getCityByCityName(value).subscribe((data) => {
         if(this.route.params) {
            this.route.params.subscribe(params => {
                    if((this.router.url.indexOf('home') > 0) && (params.cityName!=this.cityName)) {
                    this.router.navigate(['/home', data['cityObj'].name]);
                }
            });
         }
      });
    }

    closeDropDown() {

    }
     openDropDown() {
       this.showDropDown = !this.showDropDown;
     }

    openCusineDropDown() {
        this.cusineDropDown = !this.cusineDropDown;
    }

    getSearchValue() {
      return this.searchLocationForm.value.search;
    }

    redirectToCollection() {
      var navigate = this.cityName + '/collections/featured';
      this.router.navigate([navigate]);
    };

    onCusineValueChange(val, category) {
       if((this.searchLocationForm.value.searchLocation != '') && (this.searchLocationForm.value.searchLocation != null)) {
           this.cityName = this.searchLocationForm.value.searchLocation;
       }
       else {
           if(this.route.params) {
               this.route.params.subscribe(params => {
                   this.cityName = params['cityName'];
               });
           }
       }
        this.searchLocationForm.patchValue({"category": val});
        this.searchService.getCollectionByCusine(val,this.cityName,this.cityId , category).subscribe((data) => {
            this.router.navigate([this.cityName + '/category/' + category]);
       });

       this.searchService.getCityCollection(this.cityId).subscribe(data => {
          this.collections = data['collections']});
          this.cusineDropDown = !this.cusineDropDown;
      }
  }
