
import {Location} from './Location';
import {UserRating} from './userrating';

export class SearchCollection {

    private id: number;
    private name: string;
    private url:string;
    private photos_url:string;
    private featured_image: string;
    private user_rating: UserRating;
    private offer: string;
    private currency : string;
    private price_range : string;
    private average_cost_for_two : string;
    private cuisines : string;
    private location : Location;

      static getSearchCollection(responseData) {
        var obj = new SearchCollection();
        obj.setId(responseData.id);
        obj.setName(responseData.name);
        obj.setUrl(responseData.url);
        obj.setPhotoUrl(responseData.photos_url);
        obj.setUserRating(responseData.user_rating);
        obj.setOffer(responseData.offer);
        obj.setCurrency(responseData.currency);
        obj.setPriceRange(responseData.price_range);
        obj.setAverageCostForTwo(responseData.average_cost_for_two);
        obj.setCuisines(responseData.cuisines);
        obj.setLocation(responseData.location);
        obj.setCollImage(responseData.featured_image);
        return obj;
      };

      public setId(i) {
        return this.id = i;
      };

      public setName(c) {
        this.name = c;
      };

      public setUrl(u) {
        this.url = u;
      };

      public setPhotoUrl(p) {
        this.photos_url = p;
      };

      public setCollImage(img) {
        this.featured_image = img;
      }

      public setUserRating(ur) {
        this.user_rating = ur;
        this.user_rating['isAverage'] = (ur.rating_text == 'Average');
        this.user_rating['isExcellent'] = (ur.rating_text == 'Excellent');
        this.user_rating['isVeryGood'] = (ur.rating_text == 'Very Good');
        this.user_rating['isGood'] = (ur.rating_text == 'Good');
      };

      public setOffer(o) {
        this.offer = o;
      };

      public setCurrency(c) {
        this.currency = c;
      };

      public setPriceRange(pr) {
        this.price_range = pr;
      };

      public setAverageCostForTwo(ac) {
        this.average_cost_for_two = ac;
      };

      public setCuisines(c) {
        this.cuisines = c;
      };

      public setLocation(l) {
        this.location = l;
      };

      public getId() {
        return this.id;
      };

      public getName() {
        return this.name;
      };

      public getUrl() {
        return this.url;
      };

      public getPhotoUrl() {
        return this.photos_url;
      };

      public getUserRating() {
        return this.user_rating;
      };

      public getOffer() {
        return this.offer;
      };

      public getCurrency() {
        return this.currency;
      };

      public getPriceRange() {
        return this.price_range;
      };

      public getAverageCostForTwo() {
        return this.average_cost_for_two;
      };

      public getCuisines() {
        return this.cuisines;
      };

      public getLocation() {
        return this.location;
      };
}
