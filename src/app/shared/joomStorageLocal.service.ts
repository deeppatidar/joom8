import { Injectable} from "@angular/core";
import { NgForage } from "@ngforage/ngforage-ng4";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class JoomLocalStorageService {

    constructor(private ngForage: NgForage) {}

    public setItem(options) : Promise<any> {
        if(!options || !options.key || !options.value) {
          return Promise.reject(null);
        }
        return this.ngForage.setItem(options.key, options.value).then(data => {
             return Promise.resolve(data);
        }, error => {
             return Promise.reject(error);
        });
    };

    public getItem(options) : Promise<any> {
        if(!options || !options.key) {
            return Promise.reject(null);
        }
        return this.ngForage.getItem(options.key).then(data => {
             return Promise.resolve(data);
        }, error => {
             return Promise.reject(error);
        });
    };

    public removeItem(options) : Promise<any> {
        if(!options || !options.key) {
          return Promise.reject(null);
        }
        return this.ngForage.removeItem(options.key).then(data => {
             return Promise.resolve(data);
        }, error => {
             return Promise.reject(error);
        });
    };

    public removeAllItem() : Promise<any> {
        return this.ngForage.clear().then(data => {
             return Promise.resolve(data);
        }, error => {
             return Promise.reject(error);
        });
    };
}
