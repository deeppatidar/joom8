
import { Collection } from '../model/collection';

export class CollectionAdaptor{

    public collectionArray : Collection[] = [];

    constructor(responseData){
      this.getCollectionList(responseData.collections);
    };

    getCollectionList(response) {
        for (var collectionObj of response) {
          let collObj = collectionObj.collection;
          //by using constructor
          //let obj = new Collection(collObj.collection_id, collObj.image_url, collObj.url, collObj.title, collObj.description);
          let obj = Collection.getCollection(collObj);
          this.collectionArray.push(obj)
        }
        return this.collectionArray;
    };
  }
