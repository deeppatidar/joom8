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
    stateForm: FormGroup;
    cityData : City;
    cityId : number;
    cityName : string;
    public collections : Collection[] = [];
    public collectionslist : Collection[] = [];
    states = ['Indore', 'Bhopal','Jaipur','Udaipur','Pune','Bangalore','Mumbai','Nagpur'];

    constructor( private fb: FormBuilder, private searchService : SearchService, private router : Router, private route : ActivatedRoute, private configService : ConfigService) {
      this.initForm()
    }

    private ngOnInit() {
      if(this.route.params) {
        this.route.params.subscribe(params => {
          this.cityName = params['cityName'] ? params['cityName'] : 'Indore';
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

    initForm(): FormGroup {
      return this.stateForm = this.fb.group({
        search: [null],
         keywords_input: [null]
      })
    }

    onLocationChange(value) {
       this.showDropDown = false;
       this.cusineDropDown = !this.cusineDropDown;
       this.cityName = value;
       this.stateForm.patchValue({"search": value});
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
      return this.stateForm.value.search;
    }

    redirectToCollection() {
      var navigate = this.cityName + '/collections/featured';
      this.router.navigate([navigate]);
    };

    onCusineValueChange(val, category) {
       if((this.stateForm.value.search != '') && (this.stateForm.value.search != null)) {
           this.cityName = this.stateForm.value.search;
       }
       else {
           if(this.route.params) {
               this.route.params.subscribe(params => {
                   this.cityName = params['cityName'];
               });
           }
       }
        this.stateForm.patchValue({"keywords_input": val});
        this.searchService.getCollectionByCusine(val,this.cityName,this.cityId , category).subscribe((data) => {
            this.router.navigate([this.cityName+'/'+val+"-in-"+this.cityName]);
       });

       this.searchService.getCityCollection(this.cityId).subscribe(data => {
          this.collections = data['collections']});
          this.cusineDropDown = !this.cusineDropDown;
      }
  }
