import { Component, OnInit } from '@angular/core';

import { CollectionInterface } from '../shared/collectionInterface';
import { Collection} from '../model/collection';
import {CollectionService} from './collection.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {HeaderComponent} from '../header/header.component'
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],

})

export class CollectionComponent implements OnInit {

    public collection : CollectionInterface[] = [];
    public collections : Collection[] = [];
    errorMessage: string;
    cityName: string;
    activeTab: string;

    constructor(private collectionService : CollectionService, private route : ActivatedRoute, private router : Router) {}

    ngOnInit() {
      this.route.params.subscribe(params => {
          // let readTabFromState = this.route.snapshot._urlSegment.segments;
          // this.activeTab = readTabFromState[readTabFromState.length - 1];
          // this.cityName = params['cityName'];
      });
    }

    gotoFeatureCollection(event, url) {
        event.preventDefault();
        this.activeTab = url;
        this.router.navigate([url], { relativeTo: this.route });
    }
}
