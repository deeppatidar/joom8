
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


import { CityAdapter } from '../adapter/city.adapter';
import { City } from '../model/city';
import { Collection } from '../model/collection';
import { SearchCollection } from '../model/searchcollection';
import { CollectionAdapter } from '../adapter/collection.adapter';
import { SearchCollectionAdapter } from '../adapter/searchcollection.adapter'


@Injectable()
export class FooterService {
  private url = 'https://developers.zomato.com/api/v2.1/';

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

   private handleError(error: any): Promise<any> {
       console.error('An error occurred', error);
       return Promise.reject(error.message || error);
   };

};
