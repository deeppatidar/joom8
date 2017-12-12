
export class City {
  private id: number;
  private name: string;
  private country_id:number;
  private country_name:string;

  static getCity(responseData) {
    if(responseData) {
      var obj = new City();
      obj.setId(responseData.id);
      obj.setName(responseData.name);
      obj.setCountry_id(responseData.country_id);
      obj.setCountry_name(responseData.country_name);
      return obj;
    }

  };

  public getId() {
    return this.id;
  };

  public setId(i) {
    this.id = i;
  };

  public getName() {
    return this.name;
  };

  public setName(n) {
    this.name = n;
  };

  public getCountry_id() {
    return this.country_id;
  };

  public setCountry_id(ci) {
     this.country_id = ci;
  };

  public setCountry_name(cn) {
     this.country_name = cn;
  };

  public getCountry_name() {
     this.country_name;
  };


}
