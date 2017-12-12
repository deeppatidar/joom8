

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


//import { CollectionInterface } from '../shared/collectionInterface';

import { CollectionAdapter } from '../adapter/collection.adapter';
import { Collection } from '../model/collection';

@Injectable()
export class CollectionService {
  private url = 'https://developers.zomato.com/api/v2.1/';

   constructor (private http: Http) {}

   getCollection(cityId) : Observable<Collection[]> {
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
   }

   private handleError(error: any): Promise<any> {
       console.error('An error occurred', error);
       return Promise.reject(error.message || error);
   };

};



  //  getCollection(): Promise<Array<collectionInterface[]>> {
  //    var options = new RequestOptions({
  //           headers: new Headers({
  //           'Accept': 'application/json',
  //            'user-key' : '7d5ef14e15e09640098cbeef0df74871'
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
    //          'user-key' : '7d5ef14e15e09640098cbeef0df74871'
    //         })
    //       });
     //
    //      return this.http.get(this.url, options)
    //       //CollectionAdaptor.getCollectionList(res.json())
    //        .map((res:Response) =>  new CollectionAdaptor(res.json()))
    //        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    //      };
