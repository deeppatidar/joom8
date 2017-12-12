
import { City } from '../model/city';

export class CityAdapter{

    cityObj
    constructor(responseData){
      this.getCity(responseData);
    };

    getCity(response) {
        let _city = response.location_suggestions[0];
        this.cityObj = City.getCity(_city);
        return this.cityObj;
    };
  }
