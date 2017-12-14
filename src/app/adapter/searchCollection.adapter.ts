
import { SearchCollection } from '../model/searchcollection';

export class SearchCollectionAdapter{

    public searchCollection : SearchCollection[] = [];

    constructor(responseData){
      this.getSearchCollectionList(responseData.restaurants);
    };

    getSearchCollectionList(response) {
        for (var searchcollectionObj of response) {
          let collObj = searchcollectionObj['restaurant'];
          let obj = SearchCollection.getSearchCollection(collObj);
          this.searchCollection.push(obj);
        }
        return this.searchCollection;
    };
  }
