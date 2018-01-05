import { Subzone } from '../model/subzone';

export class SubzoneAdapter {
    subzoneObj: any;

    constructor(responseData){
      this.getSubzone(responseData);
    };

    getSubzone(response) {
        console.log(response["results"]);
        this.subzoneObj = Subzone.getSubzone(response["results"]["locations"]["subzone"]);
        return this.subzoneObj;
    };
}
