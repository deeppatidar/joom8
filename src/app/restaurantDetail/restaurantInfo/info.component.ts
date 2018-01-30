import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RestaurantDetailService } from '../restaurantDetail.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
    templateUrl: "info.component.html"
})

export class RestaurantInfoComponent implements OnInit, OnDestroy {

    restaurantId: string;
    restaurantDetail: [any];
    isLoading: boolean = true;
    activeTab: string;
    private sub: any;
    constructor(private route: ActivatedRoute, private router: Router, private restaurantDetailService: RestaurantDetailService,private sanitizer: DomSanitizer) {}

    ngOnInit() {
        this.isLoading = true;
        this.sub = this.route.parent.params.subscribe(params => {
            this.restaurantId = params.restaurantId;
            this.getPreRequisteData();
        });
    };

    getPreRequisteData() {
        this.restaurantDetailService.getRestaurantDetail({restaurantId: this.restaurantId}).subscribe(data => {
            this.isLoading = false;
            this.restaurantDetail = data;
        })
    };

    ngOnDestroy() {
       this.sub.unsubscribe();
    }
  }
