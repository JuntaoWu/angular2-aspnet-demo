
import { Component, Directive } from "@angular/core";
import { Ng2RatingComponent } from "./shared/index";

@Component({
    selector: "toh-heroes",
    templateUrl: "app/heroes/heroes.html",
    directives: [Ng2RatingComponent]
})
export class HeroesComponent {
    private score: number = 0;
}