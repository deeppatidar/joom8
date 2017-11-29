import { Component, OnInit} from '@angular/core';
import { CollectionInterface } from '../shared/collectionInterface';
import { Collection} from '../model/collection';
import {CollectionService} from './collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {

public collection : CollectionInterface[] = [];
public collections : Collection[] = [];
errorMessage: string;

constructor(private collectionService : CollectionService) {}

ngOnInit() {
  this.collectionService.getCollection()
  .subscribe((data) => this.collections = data['collections']);

}
//this.collection = data['collections']
}
//data['collectionArray'];
// loadCollection() {
//     this.collectionService.getCollection().subscribe(
//          data => {
//            this.collections = data['collectionArray'];
//            console.log(this.collections);
//          },
//          err => {
//              console.log(err);
//       });
// }
