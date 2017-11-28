import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Collection } from '../model/collection';
import {CollectionService} from './collection.service';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {

  // Constructor with injected service
  constructor(private collectionService: CollectionService) {}
   collections = [];
   ngOnInit() {
    this.loadCollection();
  }

  loadCollection() {
      this.collectionService.getCollection().subscribe(
           data => {
             //console.log(data['collections']);
             //console.log(this.collections instanceof Array)
             //this.collections = data['collectionArray'];
             this.collections = data['collections'];
             console.log(this.collections);
           },
           err => {
               // Log errors if any
               console.log(err);
        });
  }

}
