
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


import { CityAdapter } from '../adapter/city.adapter';
import { City } from '../model/city';
import { Collection } from '../model/collection';
import { CollectionAdapter } from '../adapter/collection.adapter';
import { SearchService } from '../search/search.service';

@Injectable()
export class HomeService {
  // private url = 'https://developers.zomato.com/api/v2.1/';
  //  //7d5ef14e15e09640098cbeef0df74871
   constructor (private http: Http , private searchService: SearchService) {}

   getCityByCityName(city) : Observable<City> {
       console.log("reached here");
        return this.searchService.getCityByCityName(city);
   }

   getCityCollection(cityId) : Observable<Collection[]> {
        return this.searchService.getCityCollection(cityId);
   };

   getCollectionByCusine(cusine, city , cityId , category ) {
       return this.searchService.getCollectionByCusine(cusine, city , cityId , category);
  };

   private handleError(error: any): Promise<any> {
       console.error('An error occurred', error);
       return Promise.reject(error.message || error);
   };
};
