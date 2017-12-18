import { Component, OnInit} from '@angular/core';
import { CollectionInterface } from '../shared/collectionInterface';
import { Collection} from '../model/collection';
import {CollectionService} from './collection.service';

@Component({
  selector: 'network-collection',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})

export class NetworkComponent implements OnInit {
  public collection : CollectionInterface[] = [];
  public collections : Collection[] = [];
  errorMessage: string;

  constructor(private collectionService : CollectionService) {}

  ngOnInit() {
    // this.collectionService.getCollection()
    // .subscribe((data) => this.collections = data['collections']);

  }

}
