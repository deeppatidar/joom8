import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { CollectionInterface } from '../shared/collectionInterface';
import { ConfigService } from '../shared/config.service';
import { Collection} from '../model/collection';
import { City} from '../model/city';
import {HeaderService} from '../header/header.service';
import {SearchService} from '../search/search.service';

import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {

    cityId : number;
    cityName : string;
    public collections : Collection[] = [];

  constructor( private fb: FormBuilder, private headerService : SearchService, private router : Router, private route : ActivatedRoute, private configService : ConfigService) {
  }

  private ngOnInit() {
    if(this.route.params) {
      this.route.params.subscribe(params => {
        this.cityName = params['cityName'] ? params['cityName'] : 'Indore';
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
}
