import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RestaurantDetailService } from '../restaurantDetail.service';

@Component({
  selector: "restaurant-menu",
  templateUrl: "menu.component.html"
})

export class RestaurantMenuComponent implements OnInit {
    restaurantId: string;
    message: string;
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
        this.restaurantDetailService.getDailyMenu({restaurantId: this.restaurantId}).subscribe(data => {
            this.isLoading = false;
        }, error => {
            if(error && error.status === 400) {
              this.message = (JSON.parse(error._body)).message;
            }
        });
    }

    ngOnDestroy() {
       this.sub.unsubscribe();
    }
}
