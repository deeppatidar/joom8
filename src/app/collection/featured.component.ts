import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { CollectionInterface } from '../shared/collectionInterface';
import { Collection} from '../model/collection';
import {CollectionService} from './collection.service';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'featured-collection',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})

export class FeaturedComponent implements OnInit {
  public collection : CollectionInterface[] = [];
  public colllectionList : Collection[] = [];
  errorMessage: string;
  cityId: string;
  cityName: string;

  constructor(private collectionService : CollectionService, private router : Router, private route : ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if(this.route.parent.params) {
        this.route.parent.params.subscribe(params => {
            var keys  = Object.keys(params);

            if(keys.length > 0) {
                this.cityName =  params['cityName'];
                this.collectionService.getCityByCityName(this.cityName).subscribe(cityData => {
                        this.cityId = cityData['cityObj']['id'];
                        this.collectionService.getCollection(this.cityId).subscribe(data => this.colllectionList = data['collections']);
                });
            } else {
                this.route.params.subscribe(routeParams => {
                    this.cityName =  routeParams['cityName'];
                    this.collectionService.getCityByCityName(this.cityName).subscribe(cityData => {
                        this.cityId = cityData['cityObj']['id'];
                        this.collectionService.getCollection(this.cityId).subscribe(data => this.colllectionList = data['collections']);
                    });
                });
            }
        });
    }
  }
  public getBackgroundImage(img) {
      if(!img) {
        img = 'https://b.zmtcdn.com/images/photo-backs/restaurant-back.jpg?output-format=webp';
      }
      return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }
}
