import { Component, OnInit }      from '@angular/core';
import {CollectionService} from './collection.service';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Collection} from '../model/collection';
import { SearchCollection} from '../model/searchcollection';
import { SearchService } from '../search/search.service';
import {HeaderComponent} from '../header/header.component';

import {localForageConfig} from '../configs/localForageConf';
import { JoomLocalStorageService } from '../shared/joomStorageLocal.service';

@Component({
  selector: 'search-by-category',
  templateUrl : './search-by-category.html',
  styleUrls : ['./search-by-category.css']

})
export class SearchByCategoryComponent implements OnInit {
public searchCollection : SearchCollection[] = [];
  cityName : string;
  cityId : number;
  start: number = 0;
  pageSize: number = 10;
  pageNumber: number = 0;
  totalPage: number = 0;
  end: number;
  showSpinner :boolean = true;
  displaysearchCollection: SearchCollection[] = [];
  enablePrev: boolean = true;
  enableNext: boolean = false;
  category: string;
  categoryId: string;

  constructor(private collectionService : CollectionService, private route : ActivatedRoute, private searchService: SearchService,
      private lfConf: localForageConfig, private joomLocalStorageService: JoomLocalStorageService) {}

  ngOnInit() {
    this.end  = ((this.pageNumber+1) * this.pageSize -1) ;
    if(this.route.params) {
        this.route.params.subscribe(params => {
          this.categoryId = params.categoryId;
          this.searchService.getCuisinesCollectionList(this.cityId).subscribe(data => {
              let quickSearchList = data['results']['restaurants'];
              for (let i = 0; i < quickSearchList.length; i++) {
                  if(this.categoryId == quickSearchList[i].item_id) {
                    this.category = quickSearchList[i].text;
                  }
              }

          });
          this.cityName = params['cityName'] ? params['cityName'] : 'Indore';
          this.collectionService.getCityByCityName(this.cityName).subscribe(data => {
            this.cityId = data['cityObj']['id'];
            this.joomLocalStorageService.setItem({key: 'categoryId', value: this.categoryId});
            this.joomLocalStorageService.setItem({key: 'partialSeachType', value: "BY_CATEGORY"});
            this.collectionService.getfreeFlowSearch(this.cityId, this.categoryId).subscribe((data) => {
                this.searchCollection = data['searchCollection'];
                this.showSpinner = false;
                this.totalPage = Math.ceil(this.searchCollection.length / this.pageSize);
                this.displaysearchCollection = this.searchCollection.slice(this.start,this.end + 1);
            });
          });
      });
    }
  }

  getCollectionByFilter(filter , order) {
      this.showSpinner = true;
      if(this.route.params) {
          this.route.params.subscribe(params => {
              this.collectionService.getCollectionByFilter(this.cityId, params['category'], filter , order)
              .subscribe((data) => {
                  this.searchCollection = data['searchCollection'];
                  this.showSpinner = false;
                  this.totalPage = Math.ceil(this.searchCollection.length/this.pageSize);
                  this.displaysearchCollection = this.searchCollection.slice(this.start,this.end+1);
              });
          });
      }
  }

  next() {
      if((this.pageNumber + 1) < this.totalPage) {
          this.pageNumber++;
          this.start = this.pageNumber * this.pageSize;
          this.end = Math.min((this.start + this.pageSize)-1 , 25);
          this.displaysearchCollection = this.searchCollection.slice(this.start,this.end+1);
          this.enablePrev = false;
          if((this.pageNumber + 1) == this.totalPage) {
               this.enableNext = true;
          }
      }
      else {
          this.enableNext = true;
      }
  }
  previous() {
      if((this.pageNumber-1) >= 0) {
          this.pageNumber--;
          this.start = this.pageNumber * this.pageSize;
          this.end = Math.min((this.start + this.pageSize)-1 , 25);
          this.displaysearchCollection = this.searchCollection.slice(this.start,this.end+1);
          if((this.pageNumber) == 0) {
              this.enablePrev = true;
              this.enableNext = false;
          }
      }
      else {
          this.enablePrev = true;
          this.enableNext = false;
      }
  }
}
