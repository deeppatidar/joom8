import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {CollectionService } from './collection.service';
import { DomSanitizer } from '@angular/platform-browser';
import {localForageConfig} from '../configs/localForageConf';
import { JoomLocalStorageService } from '../shared/joomStorageLocal.service';

@Component({
    selector: 'collection-detail',
    templateUrl: './collection-detail.html',
    styleUrls : ['./search-by-category.css']
})
export class CollectionDetailComponent implements OnInit {
    public cityName: string;
    public cityId: string;
    public collectionId: string;
    public restaurantList;
    public displayCollection;
    public isDataLoaded: Boolean = false;
    public restaurantCount: number = 0;
    constructor(private route: ActivatedRoute, private CollectionService: CollectionService, private sanitizer: DomSanitizer,
                private lfConf: localForageConfig, private joomLocalStorageService: JoomLocalStorageService) {}


    public getCurrentCollection(collections, colId) {
        for(let i = 0; i < collections.length; i++) {
            if (collections[i].collectionId === parseInt(colId)) {
                return collections[i];
            }
        }
    };

    public getBackground(image) {
      if(!image) {
        image = 'https://b.zmtcdn.com/images/photo-backs/restaurant-back.jpg?output-format=webp';
      }
      return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
    };

    ngOnInit() {
        if(this.route.params) {
          this.route.params.subscribe(routeParams => {
              this.cityName = routeParams.cityName;

              this.CollectionService.getCityByCityName(this.cityName).subscribe(cityData => {
                  this.cityId = cityData['cityObj']['id'];

                  this.joomLocalStorageService.setItem({key: 'collectionId', value: routeParams.collectionId});
                  this.joomLocalStorageService.setItem({key: 'partialSeachType', value: "BY_COLLECTION"});

                  this.CollectionService.getCollection(this.cityId).subscribe(collectionData => {
                      this.displayCollection = this.getCurrentCollection(collectionData['collections'], routeParams.collectionId);
                      this.isDataLoaded = true;

                      this.CollectionService.getCollectionListByCollId({cityId: this.cityId, collectionId: routeParams.collectionId}).subscribe(data => {
                          this.restaurantList = data['searchCollection'];
                          this.restaurantCount = this.restaurantList.length;
                      });
                  });
              });
          });
        }
    }
}


// @Component({
//   selector: 'search-by-category',
//   templateUrl : './search-by-category.html',
//   styleUrls : ['./search-by-category.css']
//
// })
// export class CollectionDetailComponent implements OnInit {
// }
