import { Component, OnInit} from '@angular/core';
import { CollectionInterface } from '../shared/collectionInterface';
import { Collection} from '../model/collection';
import {CollectionService} from './collection.service';

@Component({
  selector: 'bookmark-collection',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})

export class BookmarkedComponent implements OnInit {
  public collection: CollectionInterface[] = [];
  public collections: Collection[] = [];
  errorMessage: string;

  constructor(private collectionService: CollectionService) {}

  ngOnInit() {
    console.log('hello init');
    // this.collectionService.getCollection()
    // .subscribe((data) => this.collections = data['collections']);

  }

}
