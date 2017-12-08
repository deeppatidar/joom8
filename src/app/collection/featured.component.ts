import { Component, OnInit} from '@angular/core';
import { CollectionInterface } from '../shared/collectionInterface';
import { Collection} from '../model/collection';
import {CollectionService} from './collection.service';

@Component({
  selector: 'featured-collection',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})

export class FeaturedComponent implements OnInit {
  public collection : CollectionInterface[] = [];
  public collections : Collection[] = [];
  errorMessage: string;

  constructor(private collectionService : CollectionService) {}

  ngOnInit() {
    this.collectionService.getCollection()
    .subscribe((data) => this.collections = data['collections']);

  }

}
