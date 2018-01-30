import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http,Response, RequestOptions, Headers } from '@angular/http';

@Injectable()

export class RestaurantDetailService {
    private url = 'https://developers.zomato.com/api/v2.1/';

     constructor (private http: Http) {}

     getRestaurantDetail(params): Observable<any> {
        var _url = this.url + 'restaurant?res_id=' + params.restaurantId;
        var options = new RequestOptions({
           headers: new Headers({
             'Accept': 'application/json',
             'user-key' : '85d045a17a9a97b7bedc15a8e910f8f4'
           })
        });
        return this.http.get(_url, options)
         .map((resp: Response) => (resp.json()))
         .catch(this.handleError);
      };

      getDailyMenu(params): Observable<any> {
          var _url = this.url + 'dailymenu?res_id=' + params.restaurantId;
          var options = new RequestOptions({
             headers: new Headers({
               'Accept': 'application/json',
               'user-key' : '85d045a17a9a97b7bedc15a8e910f8f4'
             })
          });
          return this.http.get(_url, options)
           .map((resp: Response) => (resp.json()))
           .catch(this.handleError);
      };

      getUserReviews(params): Observable<any> {
          var _url = this.url + 'reviews?res_id=' + params.restaurantId;
          var options = new RequestOptions({
             headers: new Headers({
               'Accept': 'application/json',
               'user-key' : '85d045a17a9a97b7bedc15a8e910f8f4'
             })
          });
          return this.http.get(_url, options)
           .map((resp: Response) => (resp.json()))
           .catch(this.handleError);
      };

      private handleError(error: any): Promise<any> {
          console.error('An error occurred', error);
          return Promise.reject(error.message || error);
      }
}
