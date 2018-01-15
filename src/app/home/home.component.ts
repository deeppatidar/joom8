// Exact copy except import UserService from core
import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {SearchService} from '../search/search.service';
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
  cityId : number;
  cityName : string;
  public collections : Collection[] = [];
  public quickSearchList : Collection [] = [];
  constructor( private searchService : SearchService, private router : Router, private route : ActivatedRoute, private configService : ConfigService ) {
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
                let quickSearchList = data['results']['restaurants'];
                this.quickSearchList = quickSearchList.length > 8 ? quickSearchList.splice(0, 8): quickSearchList;
            });
            this.searchService.getCityCollection(data['cityObj']['id']).subscribe(data => {
                let collections = data['collections'];
                this.collections = collections.length > 4 ? collections.splice(0, 4): collections;
            });
        });
      });
    }
  }

  public goToCategoryDetail(event, val) {
    event.preventDefault();
    this.router.navigate([this.cityName+'/' + val + "-in-" + this.cityName]);
   }
}
