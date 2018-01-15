import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
//import { CollectionInterface } from '../shared/collectionInterface';

import { CollectionAdapter } from '../adapter/collection.adapter';
import { CityAdapter } from '../adapter/city.adapter';
import { SearchCollectionAdapter } from '../adapter/searchcollection.adapter';
import { SearchCollection } from '../model/searchCollection';
import { Collection } from '../model/collection';
import { City } from '../model/city';

@Injectable()
export class CollectionService {
  private url = 'https://developers.zomato.com/api/v2.1/';

   constructor (private http: Http) {}
   //85d045a17a9a97b7bedc15a8e910f8f4
   getCityByCityName(city) : Observable<City> {
        var _url = this.url + 'cities?q=' +city;
        var options = new RequestOptions({
           headers: new Headers({
           'Accept': 'application/json',
            'user-key' : '85d045a17a9a97b7bedc15a8e910f8f4'
           })
        });
        return this.http.get(_url, options)
         .map((resp: Response) => new CityAdapter(resp.json()))
         .catch(this.handleError);
   };

   getCollection(cityId) : Observable<Collection[]> {
     var _url = this.url + 'collections?city_id=' + cityId;
        var options = new RequestOptions({
           headers: new Headers({
           'Accept': 'application/json',
            'user-key' : '85d045a17a9a97b7bedc15a8e910f8f4'
           })
        });
        return this.http.get(_url, options)
         .map((resp: Response) => new CollectionAdapter(resp.json()))
         .catch(this.handleError);
   };

   getfreeFlowSearch(id, value) : Observable<SearchCollection[]> {
        var _url = this.url + 'search?entity_id=' + id + '&entity_type=city&q=' + value;
        var options = new RequestOptions({
           headers: new Headers({
           'Accept': 'application/json',
            'user-key' : '85d045a17a9a97b7bedc15a8e910f8f4'
           })
        });
        return this.http.get(_url, options)
         .map((resp: Response) => new SearchCollectionAdapter(resp.json()))
         .catch(this.handleError);
   };

   getCollectionByFilter(id, value ,filter , order) : Observable<SearchCollection[]> {
       var _url = this.url + 'search?entity_id='+id+'&entity_type=city&q=' + value + '&sort='+filter+'&order='+order;
       var options = new RequestOptions({
          headers: new Headers({
          'Accept': 'application/json',
           'user-key' : '85d045a17a9a97b7bedc15a8e910f8f4'
          })
       });
       return this.http.get(_url, options)
        .map((resp: Response) => new SearchCollectionAdapter(resp.json()))
        .catch(this.handleError);
    };

   private handleError(error: any): Promise<any> {
       console.error('An error occurred', error);
       return Promise.reject(error.message || error);
   };

};

  //  getCollection(): Promise<Array<collectionInterface[]>> {
  //    var options = new RequestOptions({
  //           headers: new Headers({
  //           'Accept': 'application/json',
  //            'user-key' : '85d045a17a9a97b7bedc15a8e910f8f4'
  //           })
  //         });
  //   return this.http
  //     .get(this.url, options)
  //     .toPromise()
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .catch(this.handleError);
  // }

    //  getCollection() : Observable<Collection[]>{
    //      var options = new RequestOptions({
    //         headers: new Headers({
    //         'Accept': 'application/json',
    //          'user-key' : '85d045a17a9a97b7bedc15a8e910f8f4'
    //         })
    //       });
     //
    //      return this.http.get(this.url, options)
    //       //CollectionAdaptor.getCollectionList(res.json())
    //        .map((res:Response) =>  new CollectionAdaptor(res.json()))
    //        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    //      };
