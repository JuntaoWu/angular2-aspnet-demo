
import { Component, Directive } from "@angular/core";
import { Ng2RatingComponent, Ng2RatingValueAccessor } from "./shared/index";

@Component({
    selector: "toh-heroes",
    templateUrl: "app/heroes/heroes.html",
    directives: [Ng2RatingComponent, Ng2RatingValueAccessor]
})
export class HeroesComponent {
    private score: number = 0;

    onRatingChange($event) {
        this.score = $event;
    }
}