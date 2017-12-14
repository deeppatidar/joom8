import { Component, OnInit }      from '@angular/core';
import {CollectionService} from './collection.service';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Collection} from '../model/collection';
import { SearchCollection} from '../model/searchcollection';
import {HeaderComponent} from '../header/header.component'

@Component({
  selector: 'collection-detail',
  templateUrl : './collection-detail.html',
  styleUrls : ['./collection-detail.css']

})
export class CollectionDetailComponent implements OnInit {

public searchCollection : SearchCollection[] = [];
  cityName : string;
  cityId : number;
  constructor(private collectionService : CollectionService, private route : ActivatedRoute) {}

  ngOnInit() {
    if(this.route.params) {
      this.route.params.subscribe(params => {
        this.cityName = params['cityName'] ? params['cityName'] : 'Indore';
        this.collectionService.getCityByCityName(this.cityName).subscribe(data => {
            this.cityId = data['cityObj']['id'];
            console.log(this.cityId);
            console.log(this.cityName);
            this.collectionService.getfreeFlowSearch(this.cityId, this.cityName).subscribe((data) => this.searchCollection = data['searchCollection']);
        }
        );
      });
    }
  }
}
