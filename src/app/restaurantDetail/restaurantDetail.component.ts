
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RestaurantDetailService } from './restaurantDetail.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
    templateUrl: "restaurantDetail.component.html"
})

export class RestaurantDetailComponent implements OnInit {

    restaurantId: string;
    restaurantDetail: [any];
    isLoading: boolean = true;
    activeTab: string;
    constructor(private route: ActivatedRoute, private router: Router, private restaurantDetailService: RestaurantDetailService,private sanitizer: DomSanitizer) {}

    ngOnInit() {
        this.isLoading = true;
        console.log(this.route);
        console.log(this.route.root);
        this.route.params.subscribe(params => {
            // let readTabFromState = this.route.children.snapshot._urlSegment;
            // this.activeTab = readTabFromState[readTabFromState.length - 1];
            this.restaurantId = params.restaurantId;
            this.getPreRequisteData();
        })
    };

    getPreRequisteData() {
        this.restaurantDetailService.getRestaurantDetail({restaurantId: this.restaurantId}).subscribe(data => {
            this.isLoading = false;
            this.restaurantDetail = data;
        })
    };

    getBackground(image) {
      if(!image) {
        image = 'https://b.zmtcdn.com/images/photo-backs/restaurant-back.jpg?output-format=webp';
      }
      return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
    };

    onTabSelectionChange(event, tabName: string) {
        event.preventDefault();
        this.activeTab = tabName;
        this.router.navigate([tabName], { relativeTo: this.route });
    }
}
