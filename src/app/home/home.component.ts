// Exact copy except import UserService from core
import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HomeService} from './home.service';
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
  constructor( private homeService : SearchService, private router : Router, private route : ActivatedRoute, private configService : ConfigService ) {
  }

  private ngOnInit() {
    if(this.route.params) {
      this.route.params.subscribe(params => {
        this.cityName = params['city'] ? params['city'] : 'Indore';
        this.configService.setCityName(this.cityName);
        this.homeService.getCityByCityName(this.cityName).subscribe(data => {
        this.cityId = data['cityObj']['id'];
        this.configService.setCityId(this.cityId);
        this.homeService.getCityCollection(data['cityObj']['id']).subscribe(
        data => {
            this.collections = data['collections']});
                }
            );
        });
    }
}
}
