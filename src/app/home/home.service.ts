
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
   constructor (private http: Http , private searchService: SearchService) {}
};
