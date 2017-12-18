import { Component, OnInit} from '@angular/core';
import { CollectionInterface } from '../shared/collectionInterface';
import { Collection} from '../model/collection';
import {CollectionService} from './collection.service';

@Component({
  selector: 'my-collection',
  templateUrl: './mycollection.component.html',
  styleUrls: ['./mycollection.component.css']
})

export class MyCollectionComponent implements OnInit {

  public collection : CollectionInterface[] = [];
  public collections : Collection[] = [];
  errorMessage: string;

  constructor(private collectionService : CollectionService) {}
    ngOnInit() {
      // this.collectionService.getCollection()
      // .subscribe((data) => this.collections = data['collections']);
  }
}
