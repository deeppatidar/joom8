import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RestaurantDetailService } from '../restaurantDetail.service';

@Component({
  templateUrl: "review.component.html"
})

export class RestaurantReviewComponent implements OnInit, OnDestroy {
    restaurantId: string;
    message: string;
    userReviews: [string];
    isLoading: boolean = true;
    private sub: any;
    constructor(private route: ActivatedRoute, private router: Router, private restaurantDetailService: RestaurantDetailService) {}

    ngOnInit() {
      this.sub = this.route.parent.params.subscribe(params => {
          this.restaurantId = params.restaurantId;
          this.getPreRequisteData();
      });
    }

    getPreRequisteData() {
        this.restaurantDetailService.getUserReviews({restaurantId: this.restaurantId}).subscribe(data => {
            this.userReviews = data.user_reviews;
            this.isLoading = false;
        }, error => {
            if(error && error.status === 400) {
                this.message = (JSON.parse(error._body)).message;
            }
            this.isLoading = false;
        });
    }

    ngOnDestroy() {
       this.sub.unsubscribe();
    }
}
