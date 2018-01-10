import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


import { CityAdapter } from '../adapter/city.adapter';
import { City } from '../model/city';
import { Collection } from '../model/collection';
import { CollectionAdapter } from '../adapter/collection.adapter';

@Injectable()
export class SearchService {
  private url = 'https://developers.zomato.com/api/v2.1/';
  //e1ebfb80326ef471b017334afbe0b5ca
  //7d5ef14e15e09640098cbeef0df74871
  //3682a3849e84c0b5d2ad352021b6efb1
   constructor (private http: Http) {}

   getCityByCityName(city) : Observable<City> {
        var _url = this.url + 'cities?q=' +city;
        var options = new RequestOptions({
           headers: new Headers({
           'Accept': 'application/json',
            'user-key' : '7d5ef14e15e09640098cbeef0df74871'
           })
        });
        return this.http.get(_url, options)
         .map((resp: Response) => new CityAdapter(resp.json()))
         .catch(this.handleError);
   };

   getCityCollection(cityId) : Observable<Collection[]> {
        var _url = this.url + 'collections?city_id=' + cityId;
        var options = new RequestOptions({
           headers: new Headers({
           'Accept': 'application/json',
            'user-key' : '7d5ef14e15e09640098cbeef0df74871'
           })
        });
        return this.http.get(_url, options)
         .map((resp: Response) => new CollectionAdapter(resp.json()))
         .catch(this.handleError);
   };

   getCollectionByCusine(cusine, city , cityId , category) {
       var _url = this.url + 'search?entity_id=' + cityId + '&entity_type=city&q=' + cusine+ '-in-'+ city + '&category=' + category;
       var options = new RequestOptions({
          headers: new Headers({
          'Accept': 'application/json',
           'user-key' : '7d5ef14e15e09640098cbeef0df74871'
          })
       });
       return this.http.get(_url, options)
        .map((resp: Response) => (resp.json()))
        .catch(this.handleError);
  };

   getCuisinesCollectionList(cityId) {
       var _url = "https://www.zomato.com/webapi/searchapi.php?" + cityId;
       var options = new RequestOptions({
          headers: new Headers({
          'Accept': 'application/json'
          })
       });
       return this.http.get(_url, options)
        .map((resp: Response) => (resp.json()))
        .catch(this.handleError);
   };


   private handleError(error: any): Promise<any> {
       console.error('An error occurred', error);
       return Promise.reject(error.message || error);
   };

};
