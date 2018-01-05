export class Subzone {

  static getSubzone(responseData) {
    if(responseData == null) {
        return null;
    }
    let subzoneList = [];
    for(let i of responseData) {
        subzoneList.push(i.entity_name);
    }
    return subzoneList;
  };
}
