
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RestaurantDetailService } from './restaurantDetail.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import {localForageConfig} from '../configs/localForageConf';
import { JoomLocalStorageService } from '../shared/joomStorageLocal.service';
import {CollectionService} from '../collection/collection.service';
@Component({
    templateUrl: "restaurantDetail.component.html"
})

export class RestaurantDetailComponent implements OnInit {

    restaurantId: string;
    restaurantDetail: [any];
    isLoading: boolean = true;
    activeTab: string;
    cityName: string;
    cityId: string;
    suggestions: any[];
    processedSuggestions :any[];
    constructor(private route: ActivatedRoute, private router: Router, private restaurantDetailService: RestaurantDetailService,
                private sanitizer: DomSanitizer, private lfConf: localForageConfig, private joomLocalStorageService: JoomLocalStorageService,
                private collectionService: CollectionService) {}

    ngOnInit() {
        this.isLoading = true;
        this.route.params.subscribe(params => {
            // let readTabFromState = this.route.children.snapshot._urlSegment;
            // this.activeTab = readTabFromState[readTabFromState.length - 1];
            this.restaurantId = params.restaurantId;
            this.cityName = params['cityName'] ? params['cityName'] : 'Indore';
            this.getPreRequisteData();
        })
    };

    getPreRequisteData() {
        this.restaurantDetailService.getRestaurantDetail({restaurantId: this.restaurantId}).subscribe(data => {
            this.isLoading = false;
            this.restaurantDetail = data;
            this.joomLocalStorageService.getItem({key: 'partialSeachType'}).then(searchType => {
              this.collectionService.getCityByCityName(this.cityName).subscribe(data => {
                  this.cityId = data['cityObj']['id'];
                  if(searchType == 'BY_CATEGORY') {
                        this.joomLocalStorageService.getItem({key: 'categoryId'}).then(categoryId => {
                            this.collectionService.getfreeFlowSearch(this.cityId, categoryId).subscribe((data) => {
                                this.suggestions = data['searchCollection'];
                                this.prepareDisplayData();
                            });
                        });
                  } else {
                    this.joomLocalStorageService.getItem({key: 'collectionId'}).then(collectionId => {
                        this.collectionService.getCollectionListByCollId({cityId: this.cityId, collectionId: collectionId}).subscribe(data => {
                            this.suggestions = data['searchCollection'];
                            this.prepareDisplayData();
                        });
                    });
                  }
              });
            }, error => {

            });
        })
    };

    public getBackground(image) {
      if(!image) {
        image = 'https://b.zmtcdn.com/images/photo-backs/restaurant-back.jpg?output-format=webp';
      }
      return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
    };

    onTabSelectionChange(event, tabName: string) {
        event.preventDefault();
        this.activeTab = tabName;
        this.router.navigate([tabName], { relativeTo: this.route });
    };

    prepareDisplayData () {
        let temp = [];
        var chunkSize = this.suggestions.length / 2;
        if(this.suggestions.length % 2 !== 0) {
            this.suggestions.splice(0, this.suggestions.length % 2);
        }
        for (let i = 0; i < this.suggestions.length; i+= chunkSize) {
            temp.push({suggestions: (this.suggestions.slice(i, i + chunkSize))});
        }
        this.processedSuggestions = temp;
    }
}
