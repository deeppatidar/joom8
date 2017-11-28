import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Collection } from '../model/collection';
import { CollectionAdaptor } from '../adaptor/collection.adaptor';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class CollectionService {
  private url = 'https://developers.zomato.com/api/v2.1/collections?city_id=4';

   constructor (private http: Http) {}

   //Fetch all existing comments
     getCollection() : Observable<Collection[]>{
         // ...using get request
         var options = new RequestOptions({
            headers: new Headers({
            'Accept': 'application/json',
             'user-key' : '7d5ef14e15e09640098cbeef0df74871'
            })
          });

         return this.http.get(this.url, options)
          // ...and calling .json() on the response to return data
          //using static method
          //CollectionAdaptor.getCollectionList(res.json())
          //new CollectionAdaptor(res.json())
           .map((res:Response) =>  res.json())
           //...errors if any
           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

         }

}
