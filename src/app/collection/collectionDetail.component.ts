import { Component, OnInit }      from '@angular/core';
import {CollectionService} from './collection.service';
import {Router} from '@angular/router';
import { Collection} from '../model/collection';


@Component({
  selector: 'collection-detail',
  templateUrl : './collection-detail.html',
  styleUrls : ['./collection-detail.css']

})
export class CollectionDetailComponent implements OnInit {

  ngOnInit() {
    console.log('calling');
  }

  constructor(private collectionService : CollectionService) {}

  getCollectionDetail(option) {

  }
}
