import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { CollectionInterface } from '../shared/collectionInterface';
import { ConfigService } from '../shared/config.service';
import { Collection} from '../model/collection';
import {CollectionService} from './collection.service';

@Component({
  selector: 'featured-collection',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})

export class FeaturedComponent implements OnInit {
  public collection : CollectionInterface[] = [];
  public collections : Collection[] = [];
  errorMessage: string;
  cityId;
  cityName;
  sub;

  constructor(private collectionService : CollectionService, private router : Router, private route : ActivatedRoute, private configService : ConfigService) {}

  ngOnInit() {
    this.sub = this.route
     .data
     .subscribe(v => this.cityId = v['cityId']);
    //this.configService.setCityId(14);
    //console.log(this.configService.cityId);
    if(this.route.params) {
      this.route.params.subscribe(params => {
        console.log(this.cityId);
        this.cityName = params['city'];
        this.collectionService.getCollection(this.cityId).subscribe(data => this.collections = data['collections']);
      });
    }
  }
}
