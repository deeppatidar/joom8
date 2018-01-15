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

  constructor(private collectionService : CollectionService, private route : ActivatedRoute) {}

  ngOnInit() {
    this.end  = ((this.pageNumber+1) * this.pageSize -1) ;
    if(this.route.params) {
        this.route.params.subscribe(params => {
        this.category = params.category.split("-")[0];
        this.category;
        this.cityName = params['cityName'] ? params['cityName'] : 'Indore';
        this.collectionService.getCityByCityName(this.cityName).subscribe(data => {
        this.cityId = data['cityObj']['id'];
        this.collectionService.getfreeFlowSearch(this.cityId, this.category).subscribe((data) => {
        this.searchCollection = data['searchCollection'];
        this.showSpinner = false;
        this.totalPage = Math.ceil(this.searchCollection.length/this.pageSize);
        this.displaysearchCollection = this.searchCollection.slice(this.start,this.end+1);
            });
          }
        );
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
