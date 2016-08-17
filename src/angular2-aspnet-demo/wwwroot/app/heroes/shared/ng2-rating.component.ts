
import { Component, Directive, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "ng2-rating",
    templateUrl: "app/heroes/shared/ng2-rating.html",
    styleUrls: ["app/heroes/shared/ng2-rating.css"]
})
export class Ng2RatingComponent {
    @Input() rating: number = 0;
    @Output() ratingChange = new EventEmitter<any>();

    constructor() {

    }

    changeRating(index) {
        if ((index + 1) != this.rating) {
            this.rating = index + 1;
        }
        else {
            this.rating = index + 0.5;
        }
        this.ratingChange.emit(this.rating);
    }

    writeValue(value) {
        if (this.rating !== value) {
            this.rating = value;
        }
    }
}