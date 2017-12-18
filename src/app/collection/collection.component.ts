import { Component, OnInit} from '@angular/core';
import { CollectionInterface } from '../shared/collectionInterface';
import { Collection} from '../model/collection';
import {CollectionService} from './collection.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {HeaderComponent} from '../header/header.component'
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],

})

export class CollectionComponent implements OnInit {

  public collection : CollectionInterface[] = [];
  public collections : Collection[] = [];
  errorMessage: string;
  cityName;
  constructor(private collectionService : CollectionService, private route : ActivatedRoute, private router : Router) {}
    ngOnInit() {
    //  this.router.events.subscribe((url:any) => console.log(url));
  }
}
