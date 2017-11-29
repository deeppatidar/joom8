
import { Collection } from '../model/collection';

export class CollectionAdapter{

    public collections : Collection[] = [];

    constructor(responseData){
      this.getCollectionList(responseData.collections);
    };

    getCollectionList(response) {
        for (var collectionObj of response) {
          let collObj = collectionObj.collection;
          let obj = Collection.getCollection(collObj);
          this.collections.push(obj)
        }
        return this.collections;
    };
  }
  //by using constructor
  //let obj = new Collection(collObj.collection_id, collObj.image_url, collObj.url, collObj.title, collObj.description);
